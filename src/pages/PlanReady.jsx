import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LuSparkles } from "react-icons/lu";
import { FaRegCalendar, FaRegClock, FaRegCheckCircle } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { useStudy } from '../context/StudyContext';

const PlanReady = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { updateStudyPlan, userData } = useStudy();
  
  // ✅ Ensure we are pulling from the correct state key ('subjects' or 'newPlan')
  const onboardingData = location.state?.subjects || location.state?.newPlan || [];
  
  const calculateStats = () => {
    // Handling both array and object structures for safety
    const subjectsArray = Array.isArray(onboardingData) ? onboardingData : onboardingData.subjects || [];
    const subjectCount = subjectsArray.length;
    
    // Default pace if not specified
    const pace = onboardingData.studyPace || 'standard';
    let dailyHours = 3;
    if (pace === 'relaxed') dailyHours = 1.5;
    if (pace === 'intensive') dailyHours = 5;

    const totalHours = Math.round(dailyHours * 7 * 3); // 3-week projection
    const sessionMins = onboardingData.sessionDuration || 45;
    const totalSessions = Math.round((totalHours * 60) / sessionMins);

    return {
      sessions: totalSessions,
      hours: totalHours,
      subjects: subjectCount,
      subjectsArray
    };
  };

  const stats = calculateStats();

  const handleGoToDashboard = async () => {
    try {
      // ✅ Save to Firestore via Context
      // This will automatically update Sidebar (Name/Avatar) and HomeDash (Subjects/Stats)
      await updateStudyPlan({
        subjects: stats.subjectsArray,
        activeSubjectIndex: 0,
        stats: {
          streak: 0,
          todayHours: 0, // Start at 0 for a fresh dashboard
          totalProgress: 0,
          totalSessions: stats.sessions,
          totalHours: stats.hours
        },
        // If profile name was collected in a previous step, ensure it's here
        profile: {
          ...userData?.profile,
          lastSetupCompleted: new Date().toISOString()
        }
      });

      navigate('/dashboard');
    } catch (error) {
      console.error("Failed to finalize plan:", error);
      // Fallback: navigate anyway, the listener might still pick it up
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-6 animate-in fade-in zoom-in duration-700">
      <div className="max-w-md w-full text-center">
        
        {/* Animated Icon Header */}
        <div className="relative inline-block mb-10">
          <div className="w-28 h-28 bg-gradient-to-br from-[#246690] to-[#14B8A6] rounded-[2rem] flex items-center justify-center shadow-2xl shadow-blue-900/20 rotate-3">
            <LuSparkles size={56} className="text-white animate-pulse" />
          </div>
          <div className="absolute -bottom-3 -right-3 bg-[#00C950] rounded-2xl p-2 shadow-xl border-4 border-[#F9FAFB]">
            <FaRegCheckCircle size={28} className="text-white" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-[#101828] mb-4 tracking-tighter">You're All Set!</h1>
        <p className="text-gray-500 font-medium mb-12 leading-relaxed">
          We've analyzed your subjects and pace to create the perfect study routine.
        </p>

        {/* Summary Breakdown */}
        <div className="space-y-4 mb-12">
          <SummaryCard 
            icon={<FaRegCalendar size={24}/>} 
            label="Curriculum" 
            value={`${stats.sessions} sessions total`} 
            color="blue" 
          />
          <SummaryCard 
            icon={<FaRegClock size={24}/>} 
            label="Time Investment" 
            value={`${stats.hours} hours planned`} 
            color="purple" 
          />
          <SummaryCard 
            icon={<FiBookOpen size={24}/>} 
            label="Subject Count" 
            value={`${stats.subjects} subjects ready`} 
            color="teal" 
          />
        </div>

        {/* Action Button */}
        <button 
          onClick={handleGoToDashboard} 
          className="w-full py-5 bg-gradient-to-r from-[#246690] to-[#14B8A6] rounded-2xl font-black text-xl text-white shadow-xl shadow-blue-900/20 hover:scale-[1.02] active:scale-95 transition-all"
        >
          Enter Dashboard
        </button>
        
        <p className="mt-6 text-[10px] font-bold text-gray-300 uppercase tracking-widest">
          Syncing with your secure cloud profile...
        </p>
      </div>
    </div>
  );
};

// Clean UI Component for Summary Cards
const SummaryCard = ({ icon, label, value, color }) => {
  const themes = {
    blue: "bg-blue-50 text-blue-600 border-blue-100",
    purple: "bg-purple-50 text-purple-600 border-purple-100",
    teal: "bg-teal-50 text-teal-600 border-teal-100"
  };

  return (
    <div className="bg-white border border-gray-100 p-5 rounded-[1.5rem] flex items-center gap-5 shadow-sm transition-transform hover:translate-x-1">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${themes[color]}`}>
        {icon}
      </div>
      <div className="text-left">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-0.5">{label}</p>
        <h3 className="text-xl font-bold text-[#101828] tracking-tight">{value}</h3>
      </div>
    </div>
  );
};

export default PlanReady;