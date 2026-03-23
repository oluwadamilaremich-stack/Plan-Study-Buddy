import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRegCheckCircle, FaRegLightbulb, FaChevronLeft } from "react-icons/fa";

const SessionSetup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [onboardingData] = useState(location.state || {});
  const [selectedDuration, setSelectedDuration] = useState(null);

  useEffect(() => {
    if (!location.state?.subjects) {
      navigate('/learningstyles');
    }
  }, [location, navigate]);

  const durations = [
    { id: 25, label: '25 min', subtext: 'Pomodoro' },
    { id: 45, label: '45 min', subtext: 'Standard' },
    { id: 60, label: '60 min', subtext: 'Extended' },
    { id: 90, label: '90 min', subtext: 'Deep Work' }
  ];

  const handleContinue = () => {
    const finalData = {
      ...onboardingData,
      sessionDuration: selectedDuration
    };
    navigate('/pacesetup', { state: finalData });
  };

  return (
    <div className="w-full animate-in fade-in duration-700">
    
      <div className="flex justify-between items-center mb-6 pt-4">
            <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-gray-400 hover:text-gray-800 transition-colors">
                <FaChevronLeft size={18}/> <span className="text-sm font-medium">Back</span>
            </button>
            <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Step 4 of 5</span>
                
                <div className="w-32 h-1 bg-gray-100 mt-1 rounded-full overflow-hidden">
                    <div className="w-[80%] h-full bg-gradient-to-r from-[#246690] to-[#00BBA7]"></div>
                </div>
            </div>
      </div>

        <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#101828] mb-2 tracking-tight">Ideal study session length?</h2>
            <p className="text-gray-500 font-medium text-sm">Choose the duration that works best for your focus</p>
        </div>

        <div className="w-full space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {durations.map((dur) => {
                    const isActive = selectedDuration === dur.id;
                    return (
                    <div
                        key={dur.id}
                        onClick={() => setSelectedDuration(dur.id)}
                        className={`relative flex flex-col items-center justify-center p-8 border-2 rounded-2xl cursor-pointer transition-all duration-200 
                        ${isActive 
                            ? 'border-[#246690] bg-blue-50/20 ring-1 ring-[#246690]' 
                            : 'border-gray-50 hover:border-gray-100 hover:bg-gray-50 bg-white'}`}
                    >
                        <span className={`text-2xl font-bold ${isActive ? 'text-[#246690]' : 'text-[#101828]'}`}>
                        {dur.label}
                        </span>
                        <span className="text-sm text-gray-400 font-medium">{dur.subtext}</span>
                        
                        {isActive && (
                        <div className="absolute top-4 right-4 animate-in zoom-in duration-300">
                            <FaRegCheckCircle size={20} className="text-[#246690]" />
                        </div>
                        )}
                    </div>
                    );
                })}
            </div>

            <div className="bg-[#EFF6FF] border border-blue-100 p-5 rounded-2xl flex gap-3 items-start">
                <FaRegLightbulb className="text-[#246690] shrink-0 mt-0.5" size={18} />
                <p className="text-xs leading-relaxed text-[#246690]">
                    <span className="font-bold">Pro Tip:</span> Taking regular breaks helps maintain focus and retention. Our AI will suggest optimal break times based on your choice.
                </p>
            </div>

            <div className="pt-6 mb-8">
                <button
                    onClick={handleContinue}
                    disabled={!selectedDuration}
                    className={`w-full py-5 rounded-2xl font-extrabold text-white shadow-lg transition-all flex items-center justify-center gap-2
                    ${selectedDuration 
                        ? 'bg-gradient-to-r from-[#246690] to-[#00BBA7] hover:opacity-90 active:scale-[0.98]' 
                        : 'bg-gradient-to-r from-[#246690] to-[#00BBA7] cursor-not-allowed opacity-40 shadow-none'}`}
                >
                    Continue
                </button>
            </div>
        </div>
    </div>
  );
};

export default SessionSetup;