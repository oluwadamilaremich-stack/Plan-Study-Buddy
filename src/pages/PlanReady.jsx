import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LuSparkles } from "react-icons/lu";
import { FaRegCalendar, FaRegClock, FaRegCheckCircle } from "react-icons/fa";
import { FiBookOpen } from "react-icons/fi";
import { useStudy } from '../context/StudyContext';

const PlanReady = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { updateStudyPlan } = useStudy();
  
  const onboardingData = location.state?.newPlan || {};
  
  const calculateStats = () => {
    const subjectCount = onboardingData.subjects?.length || 0;
    let dailyHours = 3;
    if (onboardingData.studyPace === 'relaxed') dailyHours = 1.5;
    if (onboardingData.studyPace === 'intensive') dailyHours = 5;

    const totalHours = Math.round(dailyHours * 7 * 3);
    const sessionMins = onboardingData.sessionDuration || 45;
    const totalSessions = Math.round((totalHours * 60) / sessionMins);

    return {
      sessions: totalSessions,
      hours: totalHours,
      subjects: subjectCount
    };
  };

  const stats = calculateStats();

  const handleGoToDashboard = () => {
    // Save to Context (which now saves to LocalStorage)
    updateStudyPlan({
      subjects: onboardingData.subjects || [],
      stats: {
        streak: 0,
        todayHours: onboardingData.studyPace === 'intensive' ? 5 : 2.5,
        totalProgress: 0,
        totalSessions: stats.sessions,
        totalHours: stats.hours
      }
    });
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <div className="relative inline-block mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-[#246690] to-[#14B8A6] rounded-3xl flex items-center justify-center shadow-2xl">
            <LuSparkles size={48} className="text-white" />
          </div>
          <div className="absolute -bottom-2 -right-2 bg-[#00C950] rounded-full p-1 shadow-lg">
            <FaRegCheckCircle size={32} className="text-white" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-[#101828] mb-3">Your Plan is Ready!</h1>
        <p className="text-gray-500 mb-10">We've created a personalized study schedule just for you.</p>

        <div className="space-y-4 mb-10">
          <SummaryCard icon={<FaRegCalendar size={24}/>} label="Study sessions" value={`${stats.sessions} sessions planned`} color="blue" />
          <SummaryCard icon={<FaRegClock size={24}/>} label="Total study time" value={`${stats.hours} hours planned`} color="purple" />
          <SummaryCard icon={<FiBookOpen size={24}/>} label="Subjects covered" value={`${stats.subjects} subjects`} color="teal" />
        </div>

        <button onClick={handleGoToDashboard} className="w-full py-5 bg-gradient-to-r from-[#246690] to-[#14B8A6] rounded-2xl font-extrabold text-white shadow-xl hover:opacity-95 transition-all">
          View My Dashboard
        </button>
      </div>
    </div>
  );
};

// Sub-component for clean code
const SummaryCard = ({ icon, label, value, color }) => (
  <div className="bg-white border border-gray-100 p-5 rounded-2xl flex items-center gap-4 shadow-sm">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${color === 'blue' ? 'bg-blue-50 text-blue-600' : color === 'purple' ? 'bg-purple-50 text-purple-600' : 'bg-teal-50 text-teal-600'}`}>
      {icon}
    </div>
    <div className="text-left">
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{label}</p>
      <h3 className="text-lg font-bold text-[#101828]">{value}</h3>
    </div>
  </div>
);

export default PlanReady;