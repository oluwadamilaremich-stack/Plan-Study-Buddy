import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRegCheckCircle, FaRegClock, FaChevronLeft } from "react-icons/fa";
import { FiZap, FiTarget } from "react-icons/fi";

const PaceSetup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [onboardingData] = useState(location.state || {});
  const [selectedPace, setSelectedPace] = useState(null);

  useEffect(() => {
    if (!location.state?.subjects) {
      navigate('/sessionsetup');
    }
  }, [location, navigate]);

  const paces = [
    { 
      id: 'relaxed', 
      title: 'Relaxed', 
      desc: '1-2 hours/day', 
      icon: <FaRegClock size={20} className="text-blue-500" /> 
    },
    { 
      id: 'moderate', 
      title: 'Moderate', 
      desc: '2-4 hours/day', 
      icon: <FiTarget size={20} className="text-purple-500" /> 
    },
    { 
      id: 'intensive', 
      title: 'Intensive', 
      desc: '4+ hours/day', 
      icon: <FiZap size={20} className="text-orange-500" /> 
    }
  ];

  const handleComplete = () => {
    const finalSubmission = {
      ...onboardingData,
      studyPace: selectedPace
    };
    navigate('/planready', { state: { newPlan: finalSubmission } });
  };

  return (
    /* Changed: Restored top-left alignment logic */
    <div className="w-full animate-in fade-in duration-700">
      
      {/* Designer Header - Aligned to match the layout grid */}
      <div className="flex justify-between items-center mb-6 pt-4">
          <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-gray-400 hover:text-gray-800 transition-colors">
              <FaChevronLeft size={18}/> <span className="text-sm font-medium">Back</span>
          </button>
          <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Step 5 of 5</span>
              {/* Progress bar preserved as requested */}
              <div className="w-32 h-1 bg-gray-100 mt-1 rounded-full overflow-hidden">
                 <div className="w-full h-full bg-gradient-to-r from-[#246690] to-[#00BBA7]"></div>
              </div>
          </div>
      </div>

      {/* Title Section - Top-Left Aligned */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-[#101828] mb-2 tracking-tight">What's your study pace?</h2>
        <p className="text-gray-500 font-medium text-sm">This helps us create a realistic schedule for you</p>
      </div>

      <div className="w-full space-y-4">
        {/* Pace Options */}
        <div className="grid gap-4">
          {paces.map((pace) => {
            const isActive = selectedPace === pace.id;
            return (
              <div 
                key={pace.id}
                onClick={() => setSelectedPace(pace.id)}
                className={`flex items-center gap-5 p-6 border-2 rounded-2xl cursor-pointer transition-all duration-200 
                  ${isActive 
                    ? 'border-[#246690] bg-blue-50/20 shadow-sm' 
                    : 'border-gray-50 hover:border-gray-100 bg-white'}`}
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-100">
                  {pace.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#101828]">{pace.title}</h3>
                  <p className="text-sm text-gray-500 font-medium">{pace.desc}</p>
                </div>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                  ${isActive ? 'bg-[#246690] border-[#246690]' : 'border-gray-200 bg-white'}`}>
                  {isActive && <FaRegCheckCircle size={16} className="text-white" />}
                </div>
              </div>
            );
          })}
        </div>

        {/* Final Action Button */}
        <div className="pt-8 mb-8">
          <button 
            onClick={handleComplete}
            disabled={!selectedPace}
            className={`w-full py-5 rounded-2xl font-extrabold text-white shadow-lg transition-all flex items-center justify-center gap-2
              ${selectedPace 
                ? 'bg-gradient-to-r from-[#246690] to-[#00BBA7] hover:opacity-90 active:scale-[0.98]' 
                : 'bg-gradient-to-r from-[#246690] to-[#00BBA7] cursor-not-allowed opacity-40 shadow-none'}`}
          >
            Complete Setup
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaceSetup;