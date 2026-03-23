import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaPlus, FaChevronLeft, FaTimes } from "react-icons/fa";
import { LuLoaderCircle } from "react-icons/lu";
import { GoogleGenerativeAI } from "@google/generative-ai";

const TopicSetup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // State: Use "subjects" as the consistent key
  const [allSubjects, setAllSubjects] = useState(location.state?.subjects || []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAdding, setIsAdding] = useState(false);
  const [newTopic, setNewTopic] = useState("");
  const [loadingAI, setLoadingAI] = useState(false);
  const [suggestedTopics, setSuggestedTopics] = useState([]);

  const currentSubject = allSubjects[currentIndex];
  const hasFetched = useRef(false);
  
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 
  const genAI = new GoogleGenerativeAI(API_KEY);

  // Guard: Redirect if no subjects are found in state
  useEffect(() => {
    if (!location.state?.subjects || allSubjects.length === 0) {
      navigate('/accountsetup'); 
    }
  }, [location.state, navigate, allSubjects.length]);

  // Fetch AI suggestions when subject changes
  useEffect(() => {
    if (!currentSubject?.name || hasFetched.current) return;

    hasFetched.current = true;
    fetchAISuggestions(currentSubject.name);

    // Cleanup: Reset when moving away or unmounting
    return () => {
      hasFetched.current = false;
    };
  }, [currentIndex, currentSubject?.name]);

  const fetchAISuggestions = async (subjectName) => {
    setLoadingAI(true);
    try {
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash-latest" 
      });

      const prompt = `List 5 essential study topics for the school subject "${subjectName}". 
      Format: return only the names separated by commas. No numbers, no introductory text.`;
      
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      if (!text) throw new Error("Empty response");

      const cleanedTopics = text.split(',')
        .map(t => t.trim().replace(/[*#]/g, '')) 
        .filter(t => t.length > 0)
        .slice(0, 5);
        
      setSuggestedTopics(cleanedTopics.length ? cleanedTopics : ["Core Concepts", "Exam Prep"]);

    } catch (error) {
      console.error("Gemini Error:", error);
      setSuggestedTopics(["Core Concepts", "Exam Preparation", "Key Theories"]);
    } finally {
      setLoadingAI(false);
    }
  };

  const handleAddTopic = (topicName) => {
    if (!topicName.trim()) return;
    
    const updatedSubjects = allSubjects.map((subject, index) => {
      if (index === currentIndex) {
        const exists = subject.topics.includes(topicName.trim());
        return {
          ...subject,
          topics: exists ? subject.topics : [...subject.topics, topicName.trim()]
        };
      }
      return subject;
    });

    setAllSubjects(updatedSubjects);
    setNewTopic("");
    setIsAdding(false);
  };

  const removeTopic = (topicIndex) => {
    const updatedSubjects = allSubjects.map((subject, index) => {
      if (index === currentIndex) {
        return {
          ...subject,
          topics: subject.topics.filter((_, i) => i !== topicIndex)
        };
      }
      return subject;
    });
    setAllSubjects(updatedSubjects);
  };

  const handleContinue = () => {
    if (currentIndex < allSubjects.length - 1) {
      // Move to next subject
      setCurrentIndex(prev => prev + 1);
      setSuggestedTopics([]); // Clear old suggestions
      hasFetched.current = false; // Allow AI to fetch for the new subject
      window.scrollTo(0, 0); 
    } else {
      // Finalize and move to Learning Styles
      // CRITICAL: Ensure key is "subjects" to match the Guard logic
      navigate('/learningstyles', { state: { subjects: allSubjects } });
    }
  };

  if (!currentSubject) return null;

  return (
    <div className="w-full animate-in fade-in duration-700">
      
      {/* Header & Progress */}
      <div className="flex justify-between items-center mb-6 pt-4">
        <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-gray-400 hover:text-gray-800 transition-colors">
          <FaChevronLeft size={18}/> <span className="text-sm font-medium">Back</span>
        </button>
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Step 2 of 5</span>
          <div className="w-32 h-1 bg-gray-100 mt-1 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-[#246690] to-[#00BBA7] transition-all duration-500"
              style={{ width: `${((currentIndex + 1) / allSubjects.length) * 100}%` }}
            ></div>
          </div>
          <span className="text-[10px] font-bold text-[#246690] mt-2 uppercase">Subject {currentIndex + 1} of {allSubjects.length}</span>
        </div>
      </div>

      {/* Subject Identity */}
      <div className="flex items-center gap-5 mb-10">
        <div className="w-14 h-14 bg-[#F0F7FF] text-[#246690] rounded-2xl flex items-center justify-center font-bold text-2xl shadow-sm border border-blue-50">
          {currentSubject.name?.charAt(0)}
        </div>
        <div>
          <h2 className="text-3xl font-bold text-[#101828] tracking-tight">{currentSubject.name}</h2>
          <p className="text-gray-500 font-medium text-sm">What specific topics are you studying?</p>
        </div>
      </div>

      <div className="w-full space-y-4">
        {/* Active Topics List */}
        <div className="space-y-3">
          {currentSubject.topics.map((topic, i) => (
            <div key={`${currentIndex}-${i}`} className="flex justify-between items-center p-4 border border-gray-100 rounded-2xl bg-white shadow-sm transition-all group">
              <span className="font-semibold text-[#334155]">{topic}</span>
              <button onClick={() => removeTopic(i)} className="p-1 text-gray-300 hover:text-red-500 transition-all">
                <FaTimes size={18}/>
              </button>
            </div>
          ))}
        </div>

        {/* Input Field for Custom Topics */}
        {isAdding ? (
          <div className="p-4 border-2 border-[#246690] rounded-2xl flex flex-col sm:flex-row gap-3 bg-white animate-in zoom-in duration-200 shadow-lg">
            <input 
              className="flex-1 outline-none font-medium px-2 py-2" 
              placeholder="Enter topic name..." 
              value={newTopic} 
              onChange={e => setNewTopic(e.target.value)} 
              onKeyDown={(e) => e.key === 'Enter' && handleAddTopic(newTopic)}
              autoFocus 
            />
            <div className='flex gap-2 justify-end'>
              <button onClick={() => handleAddTopic(newTopic)} className="bg-gradient-to-r from-[#246690] to-[#00BBA7] text-white px-6 py-2 rounded-xl font-bold transition-all">
                Add
              </button>
              <button onClick={() => setIsAdding(false)} className="px-6 py-2 bg-gray-50 text-gray-500 rounded-xl font-bold border border-gray-100">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button 
            onClick={() => setIsAdding(true)} 
            className="w-full border-2 border-dashed border-gray-200 rounded-2xl py-6 flex items-center justify-center gap-2 text-gray-400 hover:border-[#246690] hover:text-[#246690] transition-all bg-white group"
          >
            <FaPlus size={20} className="group-hover:scale-110 transition-transform"/> 
            <span className="font-bold">Add Custom Topic</span>
          </button>
        )}

        {/* AI Recommendations */}
        <div className="mt-10">
          <div className="flex items-center gap-2 mb-4">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">AI Suggestions</p>
            {loadingAI && <LuLoaderCircle size={14} className="animate-spin text-[#3B82CD]"/>}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {!loadingAI ? suggestedTopics.map((topic, index) => (
              <button 
                key={`suggest-${index}`} 
                onClick={() => handleAddTopic(topic)} 
                className="px-4 py-2 bg-[#F0F7FF] text-[#246690] rounded-xl text-sm font-bold hover:bg-[#246690] hover:text-white transition-all border border-blue-50"
              >
                + {topic}
              </button>
            )) : (
              [1,2,3,4].map(i => <div key={`skeleton-${i}`} className="h-10 w-24 bg-gray-50 rounded-xl animate-pulse border border-gray-100"></div>)
            )}
          </div>
        </div>

        {/* Main Navigation Button */}
        <div className="pt-8 mb-8">
          <button 
            onClick={handleContinue} 
            disabled={currentSubject.topics.length === 0}
            className={`w-full py-5 rounded-2xl font-extrabold text-white shadow-lg transition-all flex items-center justify-center gap-2
              ${currentSubject?.topics.length > 0 
                ? 'bg-gradient-to-r from-[#246690] to-[#00BBA7] hover:opacity-90 active:scale-[0.98]' 
                : 'bg-gray-200 cursor-not-allowed shadow-none opacity-40'
              }`}
          >
            {currentIndex < allSubjects.length - 1 ? (
              <>Next Subject <span className="opacity-70 text-sm">({allSubjects[currentIndex + 1]?.name})</span></>
            ) : (
              'Continue to Learning Styles'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicSetup;