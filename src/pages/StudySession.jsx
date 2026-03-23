import React, { useState, useEffect, useRef } from 'react';
import { useStudy } from '../context/StudyContext';
import { IoCameraOutline, IoCloseCircle } from "react-icons/io5";
import { FaRegLightbulb, FaPaperclip, FaEraser, FaChevronLeft, FaRegCheckCircle } from "react-icons/fa";
import { FiMessageSquare, FiCoffee, FiAlertTriangle } from "react-icons/fi";
import { LuLoaderCircle, LuSparkles, LuSend } from "react-icons/lu";
import { CiPlay1, CiPause1 } from "react-icons/ci";
import { FaArrowRotateLeft } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Groq from "groq-sdk";

const StudySession = () => {
  const { userData, updateStudyPlan } = useStudy();
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  
  const currentSubject = userData.currentSession?.subject || "General Studies";
  const currentTopic = userData.currentSession?.topic || "Learning Session";

  const groq = new Groq({
    apiKey: import.meta.env.VITE_GROQ_API_KEY, 
    dangerouslyAllowBrowser: true 
  });

  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [notes, setNotes] = useState("");
  const [showCongrats, setShowCongrats] = useState(false);
  const [showClearModal, setShowClearModal] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem('study_chat_history');
    return saved ? JSON.parse(saved) : [];
  });
  
  const [userQuery, setUserQuery] = useState("");
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('study_chat_history', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => setSeconds((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const formatTime = (totalSeconds) => {
    const hrs = Math.floor(totalSeconds / 3600);
    const mins = Math.floor((totalSeconds % 3600) / 60);
    const secs = totalSeconds % 60;
    return [hrs, mins, secs].map(v => v < 10 ? "0" + v : v).join(":");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile({
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file)
      });
    }
    e.target.value = null;
  };

  const removeFile = () => setSelectedFile(null);

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem('study_chat_history');
    setShowClearModal(false);
  };

  const handleSendQuestion = async (e) => {
    if (e) e.preventDefault();
    if (!userQuery.trim() && !selectedFile) return;

    const currentQuery = userQuery;
    const currentFile = selectedFile;
    
    setUserQuery("");
    setSelectedFile(null);
    setIsAiLoading(true);
    
    const newUserMsg = { 
      role: 'user', 
      text: currentQuery, 
      id: Date.now(),
      file: currentFile ? { name: currentFile.name, url: currentFile.url } : null
    };
    
    setMessages(prev => [newUserMsg, ...prev]);

    try {
      const chatContext = messages.slice(0, 6).reverse().map(m => ({
        role: m.role === 'ai' ? 'assistant' : 'user',
        content: m.text
      }));

      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: `You are an expert tutor for ${currentSubject}.` },
          ...chatContext,
          { role: "user", content: currentQuery }
        ],
        model: "llama-3.3-70b-versatile",
      });
      
      setMessages((prev) => [{ role: 'ai', text: completion.choices[0]?.message?.content, id: Date.now() + 1 }, ...prev]);
    } catch (error) {
      console.error("AI Error:", error);
    } finally { 
      setIsAiLoading(false); 
    }
  };

  const handleCompleteSession = () => {
    setIsActive(false);

    // Logic: 18s = 1% progress
    const earnedProgress = Math.max(1, Math.floor(seconds / 18));

    // Format Duration for SubjectDetail (e.g. "1h 5m")
    const formatDuration = (totalSecs) => {
        const h = Math.floor(totalSecs / 3600);
        const m = Math.floor((totalSecs % 3600) / 60);
        return h > 0 ? `${h}h ${m}m` : `${m}m`;
    };

    const updatedSubjects = [...userData.subjects];
    const subjectIndex = userData.activeSubjectIndex;
    
    if (updatedSubjects[subjectIndex]) {
      const oldProgress = updatedSubjects[subjectIndex].progress || 0;
      updatedSubjects[subjectIndex].progress = Math.min(100, oldProgress + earnedProgress);
      
      const totalSecondsDone = (updatedSubjects[subjectIndex].totalSecondsTracked || 0) + seconds;
      updatedSubjects[subjectIndex].totalSecondsTracked = totalSecondsDone;
      updatedSubjects[subjectIndex].timeSpent = formatDuration(totalSecondsDone);
    }

    updateStudyPlan({
      subjects: updatedSubjects,
      currentSession: null, 
      stats: {
        ...userData.stats,
        todayHours: (userData.stats?.todayHours || 0) + (seconds / 3600),
        completed: (userData.stats?.completed || 0) + 1
      }
    });

    setShowCongrats(true);
    setTimeout(() => navigate('/dashboard/studyplan'), 3000);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-12">
      {/* Header */}
      <div className="flex items-center justify-between px-6 md:px-8 py-6 bg-white max-w-7xl mx-auto border-b border-gray-50">
        <button onClick={() => navigate('/dashboard')} className="p-2 border rounded-lg hover:bg-gray-50 transition-colors">
          <FaChevronLeft className="text-gray-600" size={18} />
        </button>
        <div className="flex flex-col items-center text-center">
          <h1 className="text-base md:text-lg font-bold text-[#101828]">Study Session</h1>
          <span className="text-[9px] md:text-[10px] font-black text-[#14B8A6] uppercase tracking-widest px-2 py-0.5 bg-teal-50 rounded-full">
            {currentSubject}
          </span>
        </div>
        <button onClick={() => setShowClearModal(true)} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
          <FaEraser size={18} />
        </button>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 space-y-6 pt-6">
        <div className="bg-[#F0F7FF] border border-[#E0EFFF] rounded-2xl p-5 md:p-6 shadow-sm">
          <p className="text-[#246690] text-xs font-bold mb-1 uppercase tracking-wider">{currentSubject}</p>
          <h2 className="text-xl md:text-2xl font-black text-[#101828]">{currentTopic}</h2>
        </div>

        {/* Timer UI */}
        <div className="bg-gradient-to-r from-[#348CC3] via-[#246690] to-[#00D5BE] rounded-[30px] md:rounded-[40px] py-10 md:py-16 text-center text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 space-y-4 md:space-y-6">
            <p className="text-xs font-medium opacity-90 uppercase tracking-widest">Time Elapsed</p>
            <h3 className="text-6xl sm:text-8xl md:text-[120px] leading-none font-bold tracking-tight tabular-nums">
              {formatTime(seconds)}
            </h3>
            <div className="flex justify-center items-center gap-4 px-4">
              <button 
                onClick={() => setIsActive(!isActive)} 
                className="bg-white text-[#101828] px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all shadow-md active:scale-95 text-sm md:text-base"
              >
                {isActive ? <CiPause1 size={20} /> : <CiPlay1 size={20} />}
                {isActive ? "Pause" : "Start Study"}
              </button>
              <button onClick={() => { if(window.confirm("Reset?")) setSeconds(0); }} className="p-2 text-white/60 hover:text-white transition-colors">
                <FaArrowRotateLeft size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* AI Assistant Section */}
        <div className="space-y-4 pt-4">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">AI Assistant</p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => { setIsChatOpen(true); setUserQuery(`Give me some study tips for ${currentSubject}`); }} className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-full text-xs md:text-sm font-bold text-gray-700 hover:shadow-md transition-all active:scale-95">
              <FaRegLightbulb size={16} className="text-amber-400" /> Give me tips
            </button>
            <button onClick={() => setIsChatOpen(!isChatOpen)} className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-full text-xs md:text-sm font-bold text-gray-700 hover:shadow-md transition-all active:scale-95">
              <FiMessageSquare size={16} className="text-blue-400" /> {isChatOpen ? "Close Chat" : "Ask a question"}
            </button>
          </div>

          {isChatOpen && (
            <div className="bg-white border border-gray-100 rounded-3xl p-4 md:p-6 shadow-xl animate-in fade-in slide-in-from-top-2">
              <div className="max-h-80 overflow-y-auto mb-4 space-y-4 p-2 flex flex-col-reverse custom-scrollbar">
                {isAiLoading && (
                  <div className="flex items-center gap-2 text-gray-400 text-xs italic ml-2">
                    <LuLoaderCircle size={14} className="animate-spin" /> Thinking...
                  </div>
                )}
                {messages.map(msg => (
                  <div key={msg.id} className={`p-4 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#F0F7FF] text-[#246690] self-end max-w-[90%] font-medium' : 'bg-gray-50 text-gray-800 self-start max-w-[90%] border border-gray-100'}`}>
                    {msg.file && (
                      <div className="mb-2 p-2 bg-white/50 rounded-lg border border-blue-100 flex items-center gap-2 text-xs font-bold italic">
                        <FaPaperclip size={12} /> {msg.file.name}
                      </div>
                    )}
                    {msg.text}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendQuestion} className="flex items-center gap-1 bg-gray-50 border border-gray-100 rounded-2xl px-2 py-1 md:px-4 md:py-2 shadow-inner">
                <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*,.pdf" />
                <div className="flex items-center shrink-0">
                  <button type="button" onClick={() => fileInputRef.current.click()} className="p-2 text-gray-400 hover:text-[#14B8A6]">
                    <IoCameraOutline size={20} />
                  </button>
                  <button type="button" onClick={() => fileInputRef.current.click()} className="p-2 text-gray-400 hover:text-[#14B8A6]">
                    <FaPaperclip size={16} />
                  </button>
                </div>
                <input 
                  value={userQuery} 
                  onChange={(e) => setUserQuery(e.target.value)} 
                  placeholder="Ask anything..." 
                  className="flex-1 min-w-0 bg-transparent border-none py-3 text-sm font-medium focus:ring-0 outline-none text-gray-700" 
                />
                {selectedFile && (
                  <div className="flex items-center gap-1 bg-[#14B8A6]/10 text-[#14B8A6] px-2 py-1 rounded-lg shrink-0 mr-1">
                    <span className="text-[10px] font-bold truncate max-w-[50px] md:max-w-[100px]">{selectedFile.name}</span>
                    <button type="button" onClick={removeFile} className="hover:text-red-500 transition-colors">
                      <IoCloseCircle size={16} />
                    </button>
                  </div>
                )}
                <button type="submit" disabled={isAiLoading} className="shrink-0 p-3 bg-gradient-to-r from-[#348CC3] to-[#00D5BE] text-white rounded-xl shadow-md active:scale-95 disabled:opacity-50">
                  <LuSend size={18} />
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Notes */}
        <div className="space-y-3">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wide">Session Notes</p>
          <div className="bg-white border border-gray-100 rounded-[2rem] p-6 md:p-8 shadow-sm">
            <textarea 
              value={notes} 
              onChange={(e) => setNotes(e.target.value)} 
              placeholder="Jot down important concepts here..." 
              className="w-full h-32 md:h-40 resize-none outline-none text-gray-700 font-medium placeholder:text-gray-300 bg-transparent" 
            />
          </div>
        </div>

        {/* Complete Session Button */}
        <button onClick={handleCompleteSession} className="w-full py-5 md:py-6 bg-gradient-to-r from-[#1E6B9E] to-[#0CB7A4] text-white rounded-2xl md:rounded-[20px] font-semibold text-lg md:text-xl hover:shadow-lg transition-all flex items-center justify-center gap-3 mt-6 active:scale-[0.98]">
          <FiCoffee size={22} /> Complete Session
        </button>
      </div>

      {/* Modals */}
      {showClearModal && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-6 bg-[#101828]/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-[32px] p-8 max-w-sm w-full text-center shadow-2xl animate-in zoom-in-95">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FiAlertTriangle size={32} />
            </div>
            <h2 className="text-2xl font-bold text-[#101828] mb-2">Clear History?</h2>
            <p className="text-gray-500 mb-8 text-sm">This will permanently delete all messages in this session.</p>
            <div className="flex gap-3">
              <button onClick={clearChat} className="flex-1 py-3 bg-red-500 text-white rounded-xl font-bold hover:bg-red-600 transition-all">Yes, Clear</button>
              <button onClick={() => setShowClearModal(false)} className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showCongrats && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#101828]/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white rounded-[40px] p-10 max-w-md w-full text-center shadow-2xl animate-in zoom-in-95">
            <div className="w-20 h-20 bg-gradient-to-br from-[#14B8A6] to-[#246690] rounded-[28px] flex items-center justify-center mx-auto mb-6">
              <LuSparkles size={40} className="text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-[#101828] mb-4">Session Complete!</h2>
            <p className="text-gray-500 text-base md:text-lg mb-8 font-medium">Your progress has been updated.</p>
            <div className="flex items-center justify-center gap-2 text-[#14B8A6] font-bold text-lg md:text-xl">
              <FaRegCheckCircle size={22} />
              <span>Saving Data...</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudySession;