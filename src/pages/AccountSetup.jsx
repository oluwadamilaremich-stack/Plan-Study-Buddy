import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaChevronLeft, FaTimes, FaRegCalendar } from "react-icons/fa";

const AccountSetup = () => {
  const [subjects, setSubjects] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState({ name: '', date: '' });
  const navigate = useNavigate();

  const suggested = ["English", "Yoruba", "French", "Hausa", "Statistics"];

  const handleAddSubject = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.date) return;
    setSubjects([...subjects, { ...formData, id: Date.now(), topics: [] }]);
    setFormData({ name: '', date: '' });
    setIsAdding(false);
  };

  const addSuggested = (name) => {
    setSubjects([...subjects, { name, date: 'May 20, 2026', id: Date.now(), topics: [] }]);
  };

  const handleContinue = () => {
    if (subjects.length > 0) {
      navigate('/topicsetup', { state: { subjects } });
    }
  };

  return (
    <div className="w-full animate-in fade-in duration-700">
      
      {/* Header / Progress - Aligned with Step 2-5 */}
        <div className="flex justify-between items-center mb-6 pt-4">
            <button 
            disabled 
            className="flex items-center gap-1 text-gray-200 cursor-default opacity-0"
            >
                <FaChevronLeft size={18}/> <span className="text-sm font-medium">Back</span>
            </button>
            <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Step 1 of 5</span>
                {/* Progress Bar - 20% for Step 1 */}
                <div className="w-32 h-1 bg-gray-100 mt-1 rounded-full overflow-hidden">
                    <div className="w-[20%] h-full bg-gradient-to-r from-[#246690] to-[#00BBA7]"></div>
                </div>
            </div>
        </div>

      {/* Title Section */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-[#101828] mb-2 tracking-tight">Setup Your Subjects</h2>
        <p className="text-gray-500 font-medium text-sm">Add subjects and exam dates to create your study plan</p>
      </div>

      <div className="w-full space-y-4">
        
        {/* ADDING FORM / BUTTON */}
        {isAdding ? (
          <div className="border border-gray-200 rounded-2xl p-6 bg-white space-y-4 animate-in zoom-in-95 duration-200 shadow-sm">
            <div className="space-y-3">
              <input 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3.5 outline-none focus:border-[#246690] font-medium"
                placeholder="Subject Name (e.g. English)"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl p-3.5 outline-none focus:border-[#246690] font-medium"
                placeholder="Exam Date (e.g. May 20, 2026)"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div className="flex gap-3">
              <button onClick={handleAddSubject} className="flex-1 bg-gradient-to-r from-[#246690] to-[#00BBA7] text-white py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">Add</button>
              <button onClick={() => setIsAdding(false)} className="px-6 py-3 bg-gray-50 text-gray-500 rounded-xl font-bold border border-gray-100">Cancel</button>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setIsAdding(true)} 
            className="w-full border-2 border-dashed border-gray-200 rounded-2xl py-5 flex items-center justify-center gap-2 text-gray-400 hover:border-[#246690] hover:text-[#246690] transition-all bg-white font-bold group"
          >
            <FaPlus size={20} className="group-hover:scale-110 transition-transform"/> Add Subject
          </button>
        )}

        {/* LIST OF ADDED SUBJECTS */}
        <div className="space-y-3">
          {subjects.map((sub) => (
            <div key={sub.id} className="flex items-center justify-between p-4 border border-gray-50 rounded-2xl bg-white shadow-sm animate-in fade-in slide-in-from-top-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#F0F7FF] text-[#246690] rounded-xl flex items-center justify-center font-bold text-lg">
                  {sub.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-[#101828]">{sub.name}</h4>
                  <div className="flex items-center gap-1 text-xs text-gray-400 font-medium">
                    <FaRegCalendar size={12}/> {sub.date}
                  </div>
                </div>
              </div>
              <button onClick={() => setSubjects(subjects.filter(s => s.id !== sub.id))} className="p-2 text-gray-300 hover:text-red-500 transition-colors">
                <FaTimes size={20}/>
              </button>
            </div>
          ))}
        </div>

        {/* SUGGESTED SUBJECTS */}
        <div className="pt-6">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Suggested Subjects</p>
          <div className="flex flex-wrap gap-2">
            {suggested.filter(s => !subjects.find(sub => sub.name === s)).map(item => (
              <button 
                key={item} 
                onClick={() => addSuggested(item)} 
                className="px-4 py-2 bg-[#F0F9FF] text-[#246690] rounded-xl text-xs font-bold hover:bg-[#246690] hover:text-white transition-all border border-blue-50"
              >
                + {item}
              </button>
            ))}
          </div>
        </div>

        {/* CONTINUE BUTTON */}
        <div className="pt-10 mb-8">
          <button 
            onClick={handleContinue}
            disabled={subjects.length === 0}
            className={`w-full py-5 rounded-2xl font-extrabold text-white shadow-lg transition-all flex items-center justify-center gap-2
            ${subjects.length > 0 
                ? 'bg-gradient-to-r from-[#246690] to-[#00BBA7] hover:opacity-90 active:scale-[0.98]' 
                : 'bg-gradient-to-r from-[#246690] to-[#00BBA7] cursor-not-allowed opacity-40 shadow-none'}`}
          >
            Continue to Topics
          </button>
        </div>

      </div>
    </div>
  );
};

export default AccountSetup;