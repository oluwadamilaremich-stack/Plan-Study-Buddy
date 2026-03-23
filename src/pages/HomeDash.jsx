import React, { useState } from 'react';
import { useStudy } from '../context/StudyContext';
import { useAuth } from '../context/AuthContext';
import { FaRegClock, FaRegCalendar, FaChevronDown, FaTimes } from "react-icons/fa";
import { FiBookOpen, FiMessageSquare, FiUpload, FiTarget, FiZap } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

const HomeDash = () => {
  const { userData, updateStudyPlan } = useStudy();
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isQuickStartOpen, setIsQuickStartOpen] = useState(false);
  const [quickStep, setQuickStep] = useState(1);
  const [quickData, setQuickData] = useState({ subject: "", topic: "" });

  const activeSubjectIndex = userData.activeSubjectIndex || 0;
  
  const profileName = currentUser?.displayName || userData?.profile?.name || "Scholar";
  
  const subjects = userData.subjects || [];
  const hasSubjects = subjects.length > 0;
  const currentSubject = hasSubjects ? subjects[activeSubjectIndex] : null;
  const subjectsWithProgress = subjects.filter(sub => (sub.progress || 0) > 0);

  const handleSwitchSubject = (idx) => {
    updateStudyPlan({ activeSubjectIndex: idx });
    setIsDropdownOpen(false);
  };

  const handleStartMainSession = () => {
    if (!hasSubjects) {
      navigate('/dashboard/studyplan');
      return;
    }
    updateStudyPlan({
      currentSession: {
        subject: currentSubject.name,
        topic: currentSubject.topics?.[0] || "Core Concepts",
        isQuickSession: false,
        seconds: 0,
        notes: ""
      }
    });
    navigate('studysession');
  };

  const handleQuickStartSubmit = (e) => {
    e.preventDefault();
    if (!quickData.topic.trim()) return;
    updateStudyPlan({
      currentSession: { 
        subject: quickData.subject,
        topic: quickData.topic, 
        isQuickSession: true,
        seconds: 0 
      }
    });
    navigate('studysession');
  };

  const StatPill = ({ label, value, icon, bg }) => (
    <div className={`${bg} px-4 py-2.5 rounded-2xl flex items-center gap-3 border border-white/40 shadow-sm min-w-27.5`}>
        <div className="bg-white/90 p-1.5 rounded-lg shadow-xs flex items-center justify-center">
        {icon}
        </div>
        <div className="flex flex-col -space-y-0.5">
        <span className="text-[12px]  text-[#4A5565]  tracking-tighter">
            {label}
        </span>
        <span className="text-sm font-black text-[#101828]">
            {value}
        </span>
        </div>
    </div>
   );

  return (
    <div className="w-full min-h-screen bg-gray-50 animate-in fade-in duration-700 pb-20">
      
        <div className="bg-white border-b border-gray-100 w-full pt-8 pb-6">
            <div className="max-w-300 mx-auto px-4 md:px-8 space-y-8">
                
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1">
                        <h1 className="text-[32px] md:text-[40px] font-black text-[#101828] tracking-tight flex items-center gap-2">
                        Hi, {profileName} <span className="text-3xl">👋</span>
                        </h1>
                        <p className="text-[#667085] font-medium text-base">Let's make today productive</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <button 
                        onClick={() => { setQuickStep(1); setIsQuickStartOpen(true); }}
                        className="flex items-center gap-2 px-5 py-3 bg-[#E0F2FE] text-[#0369A1] rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-[#BAe6FD] transition-all shadow-sm active:scale-95"
                        >
                        <FiZap size={18} fill="currentColor" />
                        Quick Start
                        </button>

                        <button className="p-3.5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:bg-gray-50 text-gray-400 transition-all active:scale-95">
                            <FaRegCalendar size={20} />
                        </button>
                    </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                    <StatPill 
                        label="Streak" 
                        value={`${userData.stats?.streak || 7} days`} 
                        icon={<div className="w-5 h-5 rounded-full border-2 border-dashed border-[#246690] flex items-center justify-center"><div className="w-1.5 h-1.5 bg-[#246690] rounded-full" /></div>} 
                        bg="bg-[#F0F9FF]"
                    />
                    <StatPill 
                        label="Today" 
                        value={`${(userData.stats?.todayHours || 2.5).toFixed(1)}h`} 
                        icon={<FaRegClock size={16} className="text-[#7C3AED]" />} 
                        bg="bg-[#F5F3FF]"
                    />
                    <StatPill 
                        label="Progress" 
                        value={`${Math.round(userData.stats?.totalProgress || 68)}%`} 
                        icon={<FiTarget size={16} className="text-[#EA580C]" />} 
                        bg="bg-[#FFF7ED]"
                    />
                </div>

            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-8 py-6 md:py-10 max-w-300 mx-auto">
            <div className="space-y-6 md:space-y-8">
            
                <div className="relative overflow-hidden bg-linear-to-br from-[#348CC3] via-[#246690] to-[#00D5BE] rounded-4xl md:rounded-[3rem] p-8 md:p-10 text-white min-h-70 md:min-h-80 flex flex-col justify-center">
                    <div className="relative z-10">
                        <div className="flex flex-wrap items-center gap-2 mb-4 md:mb-6">
                            <span className="bg-white/20 backdrop-blur-md px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em]">Active Plan</span>
                            
                            {subjects.length > 1 && (
                            <div className="relative">
                                <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="flex items-center gap-2 bg-black/10 hover:bg-black/20 px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all border border-white/10">
                                Switch <FaChevronDown size={12} />
                                </button>
                                {isDropdownOpen && (
                                <div className="absolute top-10 left-0 bg-white rounded-2xl shadow-2xl p-2 z-50 text-gray-800 border border-gray-100 min-w-[200px]">
                                    {subjects.map((sub, idx) => (
                                    <button key={idx} onClick={() => handleSwitchSubject(idx)} className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-between ${activeSubjectIndex === idx ? 'bg-blue-50 text-[#246690]' : 'hover:bg-gray-50'}`}>
                                        {sub.name}
                                        {activeSubjectIndex === idx && <div className="w-1.5 h-1.5 bg-[#246690] rounded-full" />}
                                    </button>
                                    ))}
                                </div>
                                )}
                            </div>
                            )}
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black mb-3 md:mb-4 tracking-tighter leading-tight">
                            {hasSubjects ? currentSubject.name : "Start Your Journey"}
                        </h2>
                        <p className="text-white/80 text-sm md:text-lg font-medium mb-8 md:mb-10 max-w-md leading-relaxed">
                            {hasSubjects ? `Focusing on: ${currentSubject.topics?.[0] || 'Core Concepts'}` : "Create a plan to unlock AI tutoring."}
                        </p>

                        <button 
                            onClick={handleStartMainSession} 
                            className="w-full md:w-full bg-white text-[#246690] px-8 md:px-12 py-4 md:py-5 rounded-2xl md:rounded-[2rem] font-bold text-base md:text-lg shadow-xl hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-3"
                        >
                            {hasSubjects ? "Start Session" : "Get Started"}
                            <FaChevronDown size={20} className="-rotate-90" />
                        </button>
                    </div>
                    
                </div>

                <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <QuickLinkButton onClick={() => navigate('aiassistant')} icon={<FiMessageSquare size={24} />} label="AI Tutor" color="bg-linear-to-br from-[#E8F2FD] to-[#CBFBF1] text-[#154360]" />
                    <QuickLinkButton onClick={() => navigate('aiassistant')} icon={<FiUpload size={24} />} label="Library" color="bg-purple-50 text-purple-500" />
                </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-8">
                    <h3 className="font-bold text-[#101828] text-[20px] ">Subject Progress</h3>
                    <button onClick={() => navigate('/dashboard/studyplan')} className="text-[#246690] cursor-pointer text-[10px] font-black uppercase hover:underline">View All</button>
                </div>
                
                <div className="space-y-8">
                    {subjectsWithProgress.length > 0 ? (
                    subjectsWithProgress.map((sub, i) => (
                        <div key={i} className="group animate-in slide-in-from-bottom-2 duration-300">
                        <div className="flex justify-between items-end mb-2">
                            <span className="text-gray-800 font-bold text-xs md:text-sm">{sub.name}</span>
                            <span className="text-[#14B8A6] font-bold text-[10px] md:text-xs">{sub.progress || 0}%</span>
                        </div>
                        <div className="h-3 md:h-4 bg-gray-50 rounded-full overflow-hidden border border-gray-100 p-0.5 md:p-1">
                            <div 
                            className="h-full rounded-full bg-linear-to-r from-[#246690] to-[#14B8A6] transition-all duration-1000 ease-out" 
                            style={{ width: `${sub.progress || 0}%` }}
                            />
                        </div>
                        </div>
                    ))
                    ) : (
                    <div className="text-center py-12 md:py-20 opacity-30 flex flex-col items-center gap-3">
                        <FiBookOpen size={40} />
                        <p className="text-[9px] font-bold uppercase tracking-widest leading-tight text-center">
                        No mastery found.<br/>Complete a session to start.
                        </p>
                    </div>
                    )}
                </div>
            </div>
        </div>

        {isQuickStartOpen && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-[#101828]/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-lg rounded-[2.5rem] p-6 md:p-10 shadow-2xl animate-in zoom-in-95 relative">
            <button 
              onClick={() => setIsQuickStartOpen(false)} 
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <FaTimes size={24} />
            </button>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-50 rounded-2xl md:rounded-3xl flex items-center justify-center text-[#246690] mb-4 md:mb-6">
              <FiZap size={28} fill="currentColor" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#101828] mb-2">
              {quickStep === 1 ? "Choose Subject" : "What's the Topic?"}
            </h2>
            <form onSubmit={quickStep === 1 ? (e) => { e.preventDefault(); setQuickStep(2); } : handleQuickStartSubmit} className="space-y-4 md:space-y-6">
               <input 
                autoFocus 
                required 
                value={quickStep === 1 ? quickData.subject : quickData.topic} 
                onChange={(e) => setQuickData({ ...quickData, [quickStep === 1 ? 'subject' : 'topic']: e.target.value })} 
                placeholder={quickStep === 1 ? "e.g. Physics" : "e.g. Quantum Mechanics"} 
                className="w-full bg-gray-50 border border-gray-100 rounded-xl md:rounded-3xl px-5 py-4 md:px-6 md:py-5 text-gray-800 font-bold outline-none focus:border-[#246690] transition-all" 
               />
               <button 
                type="submit" 
                className="w-full py-4 md:py-5 bg-linear-to-br from-[#246690] to-[#00D5BE] text-white rounded-xl md:rounded-3xl font-black text-base md:text-lg shadow-xl hover:bg-[#1a4d6d] active:scale-95 transition-all"
               >
                 {quickStep === 1 ? "Next Step" : "Launch AI Tutor"}
               </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ label, value, icon, bg }) => (
  <div className={`${bg} p-4 md:p-6 rounded-2xl md:rounded-4xl flex items-center gap-3 md:gap-4 border border-white/50 shadow-sm transition-transform hover:scale-[1.02]`}>
        <div className="bg-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-sm">{icon}</div>
        <div>
            <p className="text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-widest">{label}</p>
            <p className="text-lg md:text-xl font-black text-[#101828] leading-none mt-1">{value}</p>
        </div>
  </div>
);

const QuickLinkButton = ({ onClick, icon, label, color }) => (
  <button 
    onClick={onClick} 
    className="bg-white p-6 md:p-8 rounded-3xl md:rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center gap-3 md:gap-4 hover:bg-gray-50 transition-all group w-full"
  >
    <div className={`w-12 h-12 md:w-14 md:h-14 ${color} rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
      {icon}
    </div>
    <span className="font-black text-gray-700 uppercase text-[9px] md:text-[11px] tracking-widest">{label}</span>
  </button>
);

export default HomeDash;