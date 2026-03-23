import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStudy } from '../context/StudyContext';
import { FaRegCircle, FaRegCheckCircle, FaChevronLeft, FaRegClock, FaVideo, FaRegLightbulb, FaChevronRight } from "react-icons/fa";
import { FiMessageSquare, FiBookOpen, FiFileText, FiTarget, FiTrendingUp } from "react-icons/fi";
import { IoPlayOutline } from "react-icons/io5";

const SubjectDetail = () => {
  const { subjectId } = useParams();
  const { userData, updateStudyPlan } = useStudy();
  const navigate = useNavigate();

  const subjectIndex = parseInt(subjectId);
  const subject = userData.subjects?.[subjectIndex];

  if (!subject) return <div className="p-10 text-center font-black text-gray-400">Subject not found</div>;

  // --- FUNCTIONAL LOGIC FOR STAT CARDS ---
  const progress = subject.progress || 0;
  
  // 1. Count actual topics in the array
  const totalLessons = subject.topics?.length || 0;
  
  // 2. Calculate completed modules based on the current progress percentage
  const completedLessons = totalLessons > 0 ? Math.floor((progress / 100) * totalLessons) : 0;
  
  // 3. Pull formatted time from subject data
  const studyTime = subject.timeSpent || "0h 0m";

  // --- DYNAMIC CONTENT ARRAYS ---
  const objectives = subject.objectives || [
    { text: `Master core concepts of ${subject.name}`, done: progress > 20 },
    { text: "Complete all practice modules", done: progress > 50 },
    { text: "Pass the final assessment", done: progress === 100 },
  ];

  const materials = subject.materials || [
    { title: `Introduction to ${subject.name}`, time: "15 min", type: "video", done: progress > 10 },
    { title: "Core Formula Sheet", time: "5 min", type: "doc", done: progress > 30 },
    { title: "Practice Set A", time: "30 min", type: "quiz", done: progress > 60 },
  ];

  const handleStartSession = () => {
    updateStudyPlan({
      activeSubjectIndex: subjectIndex,
      currentSession: {
        subject: subject.name,
        topic: subject.topics?.[0] || "Introduction",
        isQuickSession: false,
        seconds: 0
      }
    });
    navigate('/dashboard/studysession');
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 animate-in fade-in duration-700 pb-20">
      
      <header className="bg-white border-b border-gray-100 w-full pt-8 pb-6 px-4 md:px-8">
        <div className="max-w-[1200px] mx-auto flex items-center gap-4">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <FaChevronLeft size={20} className="text-gray-600" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#246690] text-white rounded-xl flex items-center justify-center font-bold shadow-sm">
              {subject.name.charAt(0)}
            </div>
            <div>
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest leading-none mb-1">Subject Overview</p>
              <h1 className="text-xl font-black text-[#101828] leading-none">{subject.name}</h1>
            </div>
          </div>
        </div>
      </header>

      <div className='max-w-[1200px] mx-auto px-4 md:px-8 py-6 md:py-10 space-y-8'>
        
        {/* Progress Card */}
        <div className="bg-gradient-to-r from-[#246690] to-[#00BBA7] rounded-[2.5rem] p-8 md:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-between items-start mb-2">
              <p className="text-white/80 font-black text-xs uppercase tracking-widest">Mastery Level</p>
              <FiTrendingUp size={20} className="opacity-60" />
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">{progress}%</h2>
            <div className="h-3 bg-white/20 rounded-full mb-6 overflow-hidden border border-white/10">
              <div 
                className="h-full bg-white rounded-full transition-all duration-1000 ease-out" 
                style={{ width: `${progress}%` }} 
              />
            </div>
            <div className="flex justify-between text-[11px] font-black text-white/90 tracking-wider uppercase">
              <span>{completedLessons} of {totalLessons} modules finished</span>
              <span>{studyTime} recorded</span>
            </div>
          </div>
        </div>

        {/* --- FUNCTIONAL STAT CARDS --- */}
        <div className="grid grid-cols-3 gap-4">
          <StatCard icon={<FiBookOpen size={20}/>} value={totalLessons} label="Modules" color="blue" />
          <StatCard icon={<FaRegCheckCircle size={20}/>} value={completedLessons} label="Done" color="green" />
          <StatCard icon={<FaRegClock size={20}/>} value={studyTime} label="Total Time" color="purple" />
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button 
            onClick={handleStartSession}
            className="bg-gradient-to-r from-[#246690] to-[#00BBA7] text-white py-5 rounded-2xl font-black flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
          >
            <IoPlayOutline size={18} fill="currentColor" /> Start Learning
          </button>
          <button 
            onClick={() => navigate('/dashboard/aiassistant')}
            className="bg-white border border-gray-200 py-5 rounded-2xl font-black text-gray-700 flex items-center justify-center gap-3 hover:bg-gray-50 transition-all shadow-sm active:scale-95"
          >
            <FiMessageSquare size={18} /> Chat with AI
          </button> 
        </div>

        {/* Key Learning Goals Section */}
        <div className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="bg-teal-50 p-2 rounded-lg text-[#14B8A6]">
              <FiTarget size={20} />
            </div>
            <h3 className="font-black text-[#101828] uppercase text-xs tracking-widest">Key Learning Goals</h3>
          </div>
          <div className="grid gap-5">
            {objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-4">
                {obj.done ? (
                  <FaRegCheckCircle size={20} className="text-[#14B8A6] mt-0.5 shrink-0" />
                ) : (
                  <FaRegCircle size={20} className="text-gray-200 mt-0.5 shrink-0" />
                )}
                <span className={`text-sm font-bold leading-tight ${obj.done ? 'text-gray-300 line-through' : 'text-gray-600'}`}>
                  {obj.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Course Materials Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-black text-[#101828] ml-2">Course Materials</h3>
          <div className="space-y-3">
            {materials.map((item, i) => (
              <div key={i} className="bg-white p-5 rounded-[1.5rem] border border-gray-100 flex items-center justify-between group cursor-pointer hover:border-teal-200 transition-all shadow-sm">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.done ? 'bg-teal-50 text-teal-500' : 'bg-blue-50 text-blue-500'}`}>
                    {item.type === 'video' ? <FaVideo size={20}/> : item.type === 'quiz' ? <FiBookOpen size={20}/> : <FiFileText size={20}/>}
                  </div>
                  <div>
                    <h4 className="font-black text-sm text-[#101828]">{item.title}</h4>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400">
                      <span className="flex items-center gap-1 uppercase tracking-tighter"><FaRegClock size={12}/> {item.time}</span>
                      {item.done && <span className="text-[#14B8A6] flex items-center gap-1 uppercase tracking-tighter"><FaRegCheckCircle size={12}/> Completed</span>}
                    </div>
                  </div>
                </div>
                {item.done ? (
                  <FaRegCheckCircle size={24} className="text-[#14B8A6]" />
                ) : (
                  <div className="bg-gray-50 p-2 rounded-full group-hover:bg-teal-50 group-hover:text-teal-500 transition-colors">
                    <FaChevronRight size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Smart Tip Card */}
        <div className="bg-[#F5F3FF] border border-purple-100 p-8 rounded-[2.5rem] flex flex-col md:flex-row gap-6 items-start md:items-center">
          <div className="bg-white p-4 rounded-2xl text-purple-600 shadow-sm shrink-0">
            <FaRegLightbulb size={28} />
          </div>
          <div className="space-y-2">
            <h4 className="font-black text-[#101828]">Smart Tip</h4>
            <p className="text-sm text-gray-600 font-medium leading-relaxed">
              Based on your progress in {subject.name}, try finishing the "Practice Set" before your next AI chat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ icon, value, label, color }) => {
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    purple: "bg-purple-50 text-purple-600",
  };
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm text-center space-y-2">
      <div className={`w-12 h-12 ${colors[color]} rounded-2xl flex items-center justify-center mx-auto mb-2`}>
        {icon}
      </div>
      <p className="text-xl font-black text-[#101828] leading-none tracking-tighter">{value}</p>
      <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest leading-none">{label}</p>
    </div>
  );
};

export default SubjectDetail;