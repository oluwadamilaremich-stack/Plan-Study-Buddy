import React from "react";
import PlanImg from "../assets/PlanImg.png";
import Onboard3 from "../assets/Onboard3.png";
import AdaptiveIcon from "../assets/AdaptiveIcon.png";
import TimeIcon from "../assets/TimeIcon.png";
import GoalPlan from "../assets/GoalPlan.png";
import { Link } from "react-router-dom"; // Add this at the top

const OnboardingThree = ({ prev }) => {
  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] flex items-center justify-center px-6 lg:px-20 py-24 relative">

      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full max-w-6xl gap-16">

        <div className="max-w-md">

          <div className="flex align-center gap-2 mb-6">
            <img src={PlanImg} className="w-12 h-12"/>
            <span className="font-bold text-2xl text-[#101828]">Plan</span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-[#101828] mb-4">
            AI Study Support
          </h1>

          <p className="text-[#4A5565] text-lg lg:text-xl mb-6">
            Get instant help, suggestions and personalized study tips powered by AI.
          </p>

          <div className="space-y-4 mb-8">

            <div className="flex items-center gap-3">
              <img src={AdaptiveIcon} className="w-7 h-7"/>
              <p className="text-[#364153] font-medium">
                24/7 AI assistance
              </p>
            </div>

            <div className="flex items-center gap-3">
              <img src={TimeIcon} className="w-7 h-7"/>
              <p className="text-[#364153] font-medium">
                Personalized learning
              </p>
            </div>

            <div className="flex items-center gap-3">
              <img src={GoalPlan} className="w-7 h-7"/>
              <p className="text-[#364153] font-medium">
                Smart study insights
              </p>
            </div>

          </div>

          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div className="w-8 h-2 bg-gradient-to-r from-[#246690] to-[#00BBA7] rounded-full"></div>
          </div>

          <div className="flex gap-4">

            <button
              onClick={prev}
              className="w-[104px] border border-[#E5E7EB] py-3 rounded-lg"
            >
              Back
            </button>

            <Link 
              to="/signup" className="w-60 flex items-center justify-center py-3 rounded-lg text-white font-medium bg-gradient-to-r from-[#246690] to-[#00BBA7]">
              Get Started
            </Link>

          </div>

        </div>

        <div className="w-full flex lg:justify-end">
          <img
            src={Onboard3}
            className="w-full max-w-[420px] lg:max-w-[500px] rounded-2xl hidden md:block"
          />
        </div>

      </div>
    </div>
  );
};

export default OnboardingThree;