import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudy } from '../context/StudyContext';
import { useAuth } from '../context/AuthContext';
import { updateProfile } from 'firebase/auth';
import { FaChevronLeft, FaRegSave, FaCheck } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import { LuLoaderCircle } from "react-icons/lu";

const EditProfile = () => {
  const { userData, updateStudyPlan } = useStudy();
  const { currentUser } = useAuth(); 
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [loading, setLoading] = useState(false);

  const avatarOptions = [
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Jasper",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Luna",
    "https://api.dicebear.com/7.x/avataaars/svg?seed=Bear",
  ];

  // Initialize state from Context first, then Firebase, then defaults
  const [formData, setFormData] = useState({
    firstName: userData?.profile?.firstName || currentUser?.displayName?.split(' ')[0] || "Alex",
    lastName: userData?.profile?.lastName || currentUser?.displayName?.split(' ')[1] || "Johnson",
    email: userData?.profile?.email || currentUser?.email || "",
    avatar: userData?.profile?.avatar || currentUser?.photoURL || null,
    school: userData?.profile?.school || "Lincoln High School",
    bio: userData?.profile?.bio || ""
  });

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, avatar: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    const fullNewName = `${formData.firstName} ${formData.lastName}`;

    try {
      if (currentUser) {
        const profileUpdates = { displayName: fullNewName };

        // Only sync to Firebase if it's a URL. 
        // We skip Base64 strings to avoid the "Failed to save" error.
        if (formData.avatar && typeof formData.avatar === 'string' && formData.avatar.startsWith('http')) {
          profileUpdates.photoURL = formData.avatar;
        }

        await updateProfile(currentUser, profileUpdates);
      }

      // Sync EVERYTHING to your local Context.
      // This ensures your custom uploaded image shows up in the Sidebar and Profile screen.
      updateStudyPlan({
        ...userData,
        profile: {
          ...formData,
          name: fullNewName,
          avatar: formData.avatar 
        }
      });

      // Give the state a tiny moment to settle before navigating
      setTimeout(() => navigate('/dashboard/profile'), 100);
      
    } catch (error) {
      console.error("Error saving profile:", error);
      alert(`Failed to save changes: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 bg-[#F9FAFB] min-h-screen">
      <div className="max-w-2xl mx-auto p-8">
        
        {/* Top Navigation / Actions */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-gray-500 font-bold hover:text-[#246690]"
          >
            <FaChevronLeft size={20} /> Back
          </button>
          
          <button 
            onClick={handleSave} 
            disabled={loading}
            className="bg-[#246690] text-white px-6 py-2 rounded-xl font-bold flex items-center gap-2 hover:bg-[#019384] shadow-md transition-all disabled:opacity-50"
          >
            {loading ? <LuLoaderCircle size={18} className="animate-spin" /> : <FaRegSave size={18} />}
            {loading ? "Saving..." : "Save"}
          </button>
        </div>

        <div className="space-y-6">
          {/* Profile Display Section */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-[20px] font-semibold text-[#101828] uppercase tracking-widest mb-6">Profile Display</h3>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative group">
                <div className="w-28 h-28 bg-[#246690] rounded-[2.5rem] flex items-center justify-center text-white text-4xl font-bold overflow-hidden shadow-inner border-4 border-white">
                  {formData.avatar ? (
                    <img src={formData.avatar} alt="Preview" className="w-full h-full object-cover" />
                  ) : (
                    formData.firstName.charAt(0).toUpperCase()
                  )}
                </div>
                <button 
                  onClick={() => fileInputRef.current.click()}
                  className="absolute -bottom-1 -right-1 p-2.5 bg-[#246690] text-white rounded-full shadow-lg border-2 border-white hover:scale-110 transition-all"
                >
                  <IoCameraOutline size={18} />
                </button>
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageUpload} />
              </div>

              <div className="flex-1">
                <p className="text-[10px] font-semibold text-[#101828] uppercase mb-3">Choose an Avatar</p>
                <div className="flex flex-wrap gap-3">
                  {avatarOptions.map((url, idx) => (
                    <button
                      key={idx}
                      onClick={() => setFormData({ ...formData, avatar: url })}
                      className={`relative w-12 h-12 rounded-xl border-2 transition-all overflow-hidden ${
                        formData.avatar === url ? 'border-[#246690] scale-110 shadow-md' : 'border-gray-100 hover:border-gray-300'
                      }`}
                    >
                      <img src={url} alt="Avatar option" className="w-full h-full bg-gray-50" />
                      {formData.avatar === url && (
                        <div className="absolute inset-0 bg-[#14B8A6]/20 flex items-center justify-center">
                          <FaCheck size={16} className="text-[#246690] bg-white rounded-full p-0.5" />
                        </div>
                      )}
                    </button>
                  ))}
                  <button 
                    onClick={() => setFormData({ ...formData, avatar: null })}
                    className="w-12 h-12 rounded-xl border-2 border-dashed border-gray-200 text-gray-400 text-[10px] font-bold hover:bg-gray-50 transition-colors"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <h3 className="text-[20px] font-semibold text-[#101828] uppercase tracking-widest mb-6">Personal Information</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="font-medium text-[14px] text-[#101828] ml-1">First Name</label>
                <input 
                  value={formData.firstName} 
                  onChange={e => setFormData({...formData, firstName: e.target.value})} 
                  className="w-full bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#246690]" 
                />
              </div>
              <div className="space-y-1">
                <label className="font-medium text-[14px] text-[#101828] ml-1">Last Name</label>
                <input 
                  value={formData.lastName} 
                  onChange={e => setFormData({...formData, lastName: e.target.value})} 
                  className="w-full bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#246690]" 
                />
              </div>
            </div>
            
            <div className="space-y-1">
              <label className="font-medium text-[14px] text-[#101828] ml-1">School/University</label>
              <input 
                value={formData.school} 
                onChange={e => setFormData({...formData, school: e.target.value})} 
                className="w-full bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#246690]" 
              />
            </div>

            <div className="space-y-1">
              <label className="font-medium text-[14px] text-[#101828] ml-1">Bio</label>
              <textarea 
                value={formData.bio} 
                onChange={e => setFormData({...formData, bio: e.target.value})} 
                placeholder="Tell us about your study goals..."
                className="w-full bg-[#F8FAFC] border border-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#246690] h-24 resize-none" 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;