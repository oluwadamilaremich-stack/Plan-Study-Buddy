import React, { useState } from 'react';
import { useStudy } from '../context/StudyContext';
import { FaRegClock, FaChevronRight, FaRegCheckCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const StudyPlan = () => {
  const { userData } = useStudy();
  const [view, setView] = useState('daily'); 
  const navigate = useNavigate();
  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 animate-in fade-in duration-700">
      
        <div className="bg-white border-b border-gray-100 w-full pt-8 pb-6">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8 space-y-8">
                <h1 className="text-3xl font-bold text-[#101828]">Study Plan</h1>

                <div className="flex bg-gray-100 p-1 rounded-xl w-fit">
                    {['daily', 'weekly'].map((v) => (
                    <button 
                        key={v}
                        onClick={() => setView(v)}
                        className={`px-6 py-2 rounded-lg font-bold text-sm capitalize transition-all ${
                        view === v ? 'bg-white shadow-sm text-[#101828]' : 'text-gray-400'
                        }`}
                    >
                        {v}
                    </button>
                    ))}
                </div>
            </div>
        </div>

        <div className='px-4 md:px-8 py-6 md:py-10'>
            {view === 'daily' ? (
            <div className="space-y-4">
                <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">
                Today, {getCurrentDate()}
                </p>
                
                <h2 className="text-xl font-bold text-[#101828]">
                {userData.subjects.length} sessions planned
                </h2>
                
                {userData.subjects.map((sub, i) => (
                <div 
                    key={i} 
                    onClick={() => navigate(`/dashboard/subjectdetail/${i}`)}
                    className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-[#246690] transition-all shadow-sm"
                >
                    <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white bg-[#246690]">
                        {sub.name.charAt(0)}
                    </div>
                    <div>
                        <h3 className="font-bold text-[#101828]">{sub.name}</h3>
                        <div className="flex items-center gap-3 mt-1 text-[10px] font-bold text-gray-400">
                        {/* Logic update: Use real timeSpent from context, fallback to 0m */}
                        <span className="flex items-center gap-1"><FaRegClock size={12}/> {sub.timeSpent || "0m"}</span>
                        {sub.completed && (
                            <span className="text-[#14B8A6] flex items-center gap-1">
                            <FaRegCheckCircle size={12} /> Completed
                            </span>
                        )}
                        </div>
                    </div>
                    </div>
                    <FaChevronRight size={20} className="text-gray-300 group-hover:text-[#14B8A6]" />
                </div>
                ))}
            </div>
            ) : (
            <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 text-center text-gray-400">
                Weekly progress charts will appear here.
            </div>
            )}
        </div>
    </div>
  );
};

export default StudyPlan;