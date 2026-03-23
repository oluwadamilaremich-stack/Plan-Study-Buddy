import React from "react";
import heroImg from "../assets/heroImg.png";
import ffff from "../assets/ffff.png";
import gggg from "../assets/gggg.png";

const HomeHero = () => {
  return (
    <div className="px-4 lg:px-24 flex flex-col lg:flex-row gap-12 items-center min-h-screen py-20 lg:py-32 overflow-hidden bg-white">

      <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left">

        <div>
          <p className="font-bold text-5xl md:text-7xl text-[#101828] leading-tight">Stop stressing.</p>

          <p className="bg-linear-to-b from-[#3B82CD] to-[#14B8A6] bg-clip-text text-transparent font-bold text-5xl md:text-7xl leading-tight">
            Start studying.
          </p>
        </div>

        <div className="text-lg md:text-[20px] mt-6 text-[#4A5565]">
          <p>
            You worry about what to study. We'll handle the planning. <br />
            Let AI create the perfect study schedule tailored to your <br />
            exams and availability.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center lg:justify-start">

          <button className="cursor-pointer bg-linear-to-b from-[#3B82CD] to-[#14B8A6] rounded-[10px] text-white font-medium text-[18px] px-8 py-4 shadow-lg hover:opacity-90 transition">
            Create Your Study Plan
          </button>

          <button className="cursor-pointer bg-[#F3F4F6] px-8 py-4 rounded-[10px] font-medium text-[18px] hover:bg-gray-200 transition">
            Watch Demo
          </button>

        </div>

      </div>

      
      <div className="relative w-full lg:w-1/2 flex justify-center items-center mt-12 lg:mt-0">

        <img
          src={heroImg}
          alt="Hero"
          className="w-full max-w-100 h-auto object-contain"
        />

        
        <div className="absolute -top-6 right-[5%] md:right-10 w-40 md:w-48 flex p-3 md:p-4 gap-3 rounded-2xl bg-white shadow-xl border border-gray-100 animate-bounce-slow">

          <img src={ffff} alt="" className="w-10 h-10 md:w-12 md:h-12" />

          <div>
            <p className="font-semibold text-xs md:text-sm text-[#101828]">
              AI Powered
            </p>
            <p className="text-[10px] md:text-xs text-[#4A5565]">
              Smart scheduling
            </p>
          </div>

        </div>

        
        <div className="absolute -bottom-6 left-[5%] md:left-10 w-40 md:w-48 flex p-3 md:p-4 gap-3 rounded-2xl bg-white shadow-xl border border-gray-100 animate-float">

          <img src={gggg} alt="" className="w-10 h-10 md:w-12 md:h-12" />

          <div>
            <p className="font-semibold text-xs md:text-sm text-[#101828]">
              Track Progress
            </p>
            <p className="text-[10px] md:text-xs text-[#4A5565]">
              Stay motivated
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default HomeHero;