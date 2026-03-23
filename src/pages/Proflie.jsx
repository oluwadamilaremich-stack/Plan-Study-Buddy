import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStudy } from '../context/StudyContext';
import { useAuth } from '../context/AuthContext';
import { FiLogOut, FiTarget } from "react-icons/fi";
import { FaRegUser, FaRegBell, FaChevronRight } from "react-icons/fa";
import { GoShieldCheck, GoTrophy } from "react-icons/go";
import { AiOutlineBarChart } from "react-icons/ai";
import { IoIosHelpCircleOutline, IoMdTrendingUp } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

const Profile = () => {
  const { userData } = useStudy();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // DYNAMIC PROFILE DATA
  const profile = {
    name: userData?.profile?.name || currentUser?.displayName || "Scholar",
    email: userData?.profile?.email || currentUser?.email || "student@email.com",
    avatar: userData?.profile?.avatar || currentUser?.photoURL || null,
    
    // Dynamic Stats Logic
    stats: {
      // Pulling from userData.stats or defaulting to 0
      streak: userData?.stats?.streak || 0,
      
      // We use Number() and fallback to 0 to ensure .toFixed(1) doesn't crash if data is missing
      hours: Number(userData?.stats?.todayHours || 0).toFixed(1),
      
      // Total completed tasks/subjects
      completed: userData?.stats?.completed || 0
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  const sections = [
    { 
      title: "ACCOUNT", 
      items: [
        { id: 'edit', label: "Edit Profile", icon: <FaRegUser size={20} />, action: () => navigate('edit') },
        { id: 'stats', label: "Study Statistics", icon: <AiOutlineBarChart size={20} /> },
        { id: 'notif', label: "Notifications", icon: <FaRegBell size={20} /> },
        { id: 'privacy', label: "Privacy & Security", icon: <GoShieldCheck size={20} /> },
      ]
    },
    { 
      title: "SUPPORT", 
      items: [
        { id: 'help', label: "Help Center", icon: <IoIosHelpCircleOutline size={20} /> },
        { id: 'settings', label: "App Settings", icon: <IoSettingsOutline size={20} /> },
      ]
    }
  ];

  return (
    <div className="flex-1 flex flex-col min-h-screen bg-[#F9FAFB] relative">
      
      {/* Banner Section */}
      <div className="h-[300px] bg-gradient-to-r from-[#246690] to-[#14B8A6] relative flex flex-col items-center pt-10">
        <div className="flex flex-col items-center z-10">
          <div className="w-24 h-24 bg-[#6395B6] rounded-[2rem] border-4 border-white/20 flex items-center justify-center text-white text-3xl font-bold shadow-xl overflow-hidden backdrop-blur-sm mb-4">
            {profile.avatar ? (
              <img src={profile.avatar} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <span>{profile.name.charAt(0).toUpperCase()}</span>
            )}
          </div>
          
          <div className="text-center px-4">
            <h2 className="text-2xl font-bold text-white tracking-tight leading-tight">{profile.name}</h2>
            <p className="text-sm text-white/80 font-medium mt-1">{profile.email}</p>
          </div>
        </div>

        {/* Dynamic Stats Card */}
        <div className="absolute -bottom-16 left-0 right-0 px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-[2rem] p-6 grid grid-cols-3 gap-2 md:gap-4 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100">
              <StatItem 
                icon={<FiTarget size={20}/>} 
                label="Streak" 
                value={`${profile.stats.streak} days`} 
                color="text-[#246690]" 
                bg="bg-blue-50" 
              />
              <StatItem 
                icon={<IoMdTrendingUp size={20}/>} 
                label="Today" 
                value={`${profile.stats.hours}h`} 
                color="text-purple-500" 
                bg="bg-purple-50" 
              />
              <StatItem 
                icon={<GoTrophy size={20}/>} 
                label="Done" 
                value={profile.stats.completed} 
                color="text-[#14B8A6]" 
                bg="bg-teal-50" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="mt-24 px-6 md:px-8 pb-16 max-w-5xl mx-auto w-full space-y-10">
        {sections.map((sec) => (
          <div key={sec.title} className="space-y-4">
            <h3 className="text-[14px] font-bold text-[#6A7282] uppercase tracking-[0.25em] ml-2">{sec.title}</h3>
            <div className="bg-white rounded-[1.5rem] border border-gray-100 overflow-hidden shadow-sm">
              {sec.items.map((item, idx) => (
                <button 
                  key={item.id} 
                  onClick={item.action} 
                  className={`w-full flex items-center justify-between p-5 hover:bg-gray-50 transition-all group ${idx !== sec.items.length - 1 ? 'border-b border-gray-50' : ''}`}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-gray-50 rounded-xl text-gray-400 group-hover:bg-[#14B8A6]/10 group-hover:text-[#14B8A6] transition-colors">{item.icon}</div>
                    <span className="text-[15px] font-bold text-gray-700">{item.label}</span>
                  </div>
                  <FaChevronRight size={18} className="text-gray-300 group-hover:text-[#14B8A6] group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Logout Button */}
        <button 
          onClick={() => setShowLogoutModal(true)}
          className="w-full bg-white rounded-[1.5rem] border border-gray-100 p-5 flex items-center justify-between hover:bg-red-50 group transition-all"
        >
          <div className="flex items-center gap-4">
            <div className="p-2.5 bg-red-50 rounded-xl">
              <FiLogOut size={20} className="text-red-500" />
            </div>
            <span className="text-[15px] font-bold text-red-500">Log Out</span>
          </div>
          <FaChevronRight size={18} className="text-red-200 group-hover:text-red-500 transition-all" />
        </button>
      </div>

      {/* Logout Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#101828]/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl text-center">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <FiLogOut size={40} />
            </div>
            
            <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Logging Out?</h2>
            <p className="text-gray-500 font-medium mb-10 leading-relaxed">
              Are you sure? Your study data will be saved for your next session.
            </p>

            <div className="flex flex-col gap-3">
              <button 
                onClick={handleLogout}
                className="w-full py-4 bg-red-500 text-white rounded-[1.25rem] font-black text-lg hover:bg-red-600 transition-all"
              >
                Yes, Log Out
              </button>
              <button 
                onClick={() => setShowLogoutModal(false)}
                className="w-full py-4 bg-gray-100 text-gray-600 rounded-[1.25rem] font-black text-lg hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const StatItem = ({ icon, label, value, color, bg }) => (
  <div className="flex flex-col items-center py-2 relative last:after:hidden after:content-[''] after:absolute after:right-0 after:top-1/4 after:h-1/2 after:w-[1px] after:bg-gray-100">
    <div className={`w-10 h-10 ${bg} ${color} rounded-2xl flex items-center justify-center mb-2`}>{icon}</div>
    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest text-center">{label}</span>
    <span className="text-sm md:text-base font-black text-gray-800">{value}</span>
  </div>
);

export default Profile;