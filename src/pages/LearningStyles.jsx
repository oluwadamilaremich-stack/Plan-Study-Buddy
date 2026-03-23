import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaRegEye, FaHeadphonesAlt, FaChevronLeft, FaCheck } from "react-icons/fa";
import { LuMousePointer2 } from "react-icons/lu";
import { FiBookOpen } from "react-icons/fi";


const LearningStyles = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [prevData] = useState(location.state?.finalPlan || []);
  const [selectedStyles, setSelectedStyles] = useState([]);

  useEffect(() => {
    if (!location.state?.finalPlan) {
      navigate('/topicsetup'); 
    }
  }, [location, navigate]);

  const styles = [
    {
      id: 'visual',
      title: 'Visual',
      desc: 'I learn best with diagrams, charts, and images',
      icon: <FaRegEye size={20} className="text-purple-500" />,
      bgColor: 'bg-purple-50',
    },
    {
      id: 'auditory',
      title: 'Auditory',
      desc: 'I learn best by listening and discussing',
      icon: <FaHeadphonesAlt size={20} className="text-blue-500" />,
      bgColor: 'bg-blue-50',
    },
    {
      id: 'kinesthetic',
      title: 'Kinesthetic',
      desc: 'I learn best by doing and practicing',
      icon: <LuMousePointer2 size={20} className="text-green-500" />,
      bgColor: 'bg-green-50',
    },
    {
      id: 'reading',
      title: 'Reading/Writing',
      desc: 'I learn best by reading and taking notes',
      icon: <FiBookOpen size={20} className="text-orange-500" />,
      bgColor: 'bg-orange-50',
    }
  ];

  const toggleStyle = (id) => {
    setSelectedStyles(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    const finalOnboardingData = {
      subjects: prevData,
      learningStyles: selectedStyles
    };
    navigate('/sessionsetup', { state: finalOnboardingData });
  };

  return (
    <div className="w-full animate-in fade-in duration-700">
      
        <div className="flex justify-between items-center mb-6 pt-4">
            <button onClick={() => navigate(-1)} className="flex items-center gap-1 text-gray-400 hover:text-gray-800 transition-colors">
                <FaChevronLeft size={18}/> <span className="text-sm font-medium">Back</span>
            </button>
            <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Step 3 of 5</span>
        
                <div className="w-32 h-1 bg-gray-100 mt-1 rounded-full overflow-hidden">
                    <div className="w-[60%] h-full bg-gradient-to-r from-[#246690] to-[#00BBA7]"></div>
                </div>
            </div>
        </div>

        <div className="mb-10">
            <h2 className="text-3xl font-bold text-[#101828] mb-2 tracking-tight">How do you learn best?</h2>
            <p className="text-gray-500 font-medium text-sm">Select all learning styles that work for you</p>
        </div>

        <div className="w-full space-y-4">
            
            <div className="grid gap-4">
                {styles.map((style) => {
                    const isActive = selectedStyles.includes(style.id);
                    return (
                    <div 
                        key={style.id}
                        onClick={() => toggleStyle(style.id)}
                        className={`flex items-center gap-4 p-5 border-2 rounded-2xl cursor-pointer transition-all duration-200 
                        ${isActive 
                            ? 'border-[#246690] bg-blue-50/20 shadow-sm' 
                            : 'border-gray-50 hover:border-gray-100 bg-white'}`}
                    >
                        <div className={`w-12 h-12 ${style.bgColor} rounded-xl flex items-center justify-center transition-transform ${isActive ? 'scale-105' : ''}`}>
                        {style.icon}
                        </div>
                        
                        <div className="flex-1">
                        <h3 className="font-bold text-[#101828]">{style.title}</h3>
                        <p className="text-sm text-gray-500 leading-tight">{style.desc}</p>
                        </div>

                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all
                        ${isActive ? 'bg-[#246690] border-[#246690]' : 'border-gray-200 bg-white'}`}>
                        {isActive && <FaCheck size={14} className="text-white" strokeWidth={3} />}
                        </div>
                    </div>
                    );
                })}
            </div>

            {/* Action Button */}
            <div className="pt-8 mb-8">
                <button 
                    onClick={handleContinue}
                    disabled={selectedStyles.length === 0}
                    className={`w-full py-5 rounded-2xl font-extrabold text-white shadow-lg transition-all flex items-center justify-center gap-2
                    ${selectedStyles.length > 0 
                        ? 'bg-gradient-to-r from-[#246690] to-[#00BBA7] hover:opacity-90 active:scale-[0.98]' 
                        : 'bg-gradient-to-r from-[#246690] to-[#00BBA7] cursor-not-allowed opacity-40'}`}
                >
                    Continue
                </button>
            </div>
        </div>
    </div>
  );
};

export default LearningStyles;