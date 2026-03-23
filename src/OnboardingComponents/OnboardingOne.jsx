import React from "react";
import PlanImg from "../assets/PlanImg.png";
import Onboard1 from "../assets/Onboard1.png";
import AdaptiveIcon from "../assets/AdaptiveIcon.png";
import TimeIcon from "../assets/TimeIcon.png";
import GoalPlan from "../assets/GoalPlan.png";

const OnboardingOne = ({ next, skip }) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center px-6 lg:px-20 py-24 relative">
      
      <p 
        onClick={skip}
        className="absolute top-8 right-6 lg:right-auto lg:left-1/2 lg:-translate-x-1/2 text-gray-400 text-sm cursor-pointer hover:text-[#246690] transition-colors font-medium"
      >
        Skip
      </p>

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full max-w-6xl gap-16">
        
        <div className="max-w-md">
          <div className="flex align-center gap-2 mb-6">
            <img src={PlanImg} className="w-12 h-12" alt="Plan" />
            <span className="font-bold text-2xl text-[#101828]">Plan</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-[#101828] mb-4">
            Smart Planning
          </h1>

          <p className="text-[#4A5565] text-lg lg:text-xl mb-6">
            Create personalized study schedules that adapt to your goals and
            deadlines. Let AI handle the planning while you focus on learning.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <img src={AdaptiveIcon} className="w-7 h-7" alt="Icon"/>
              <p className="text-[#364153] font-medium">Adaptive study schedules</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={TimeIcon} className="w-7 h-7" alt="Icon"/>
              <p className="text-[#364153] font-medium">Time optimization</p>
            </div>
            <div className="flex items-center gap-3">
              <img src={GoalPlan} className="w-7 h-7" alt="Icon"/>
              <p className="text-[#364153] font-medium">Goal-oriented planning</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-2 bg-gradient-to-r from-[#246690] to-[#00BBA7] rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
          </div>

          <button
            onClick={next}
            className="w-60 py-3 rounded-lg text-white font-bold bg-gradient-to-r from-[#246690] to-[#00BBA7] hover:opacity-90 transition-opacity"
          >
            Next
          </button>
        </div>

        <div className="w-full flex lg:justify-end">
          <img
            src={Onboard1}
            className="w-full max-w-[420px] lg:max-w-[500px] rounded-2xl hidden md:block"
            alt="Onboarding Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default OnboardingOne;