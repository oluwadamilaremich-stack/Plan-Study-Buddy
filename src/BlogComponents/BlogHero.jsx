import React from "react";
import blogHeroo from "../assets/BlogHero.png";
import Calendar from "../assets/Calendar.png";
import Clock from "../assets/Clock.png";

const BlogHero = () => {
  return (
    <div className="bg-linear-to-b from-[#F9FAFB] to-[#FFFFFF]   px-6 md:px-24 py-16 md:py-20">
      
      
      <div className="flex flex-col items-center max-w-5xl mx-auto mb-16">
        <h1 className="text-center font-bold text-3xl md:text-[48px] leading-tight text-[#101828]">
          The{" "}
          <span className="bg-gradient-to-b from-[#3B82CD] to-[#14B8A6] bg-clip-text text-transparent">
            StudyPlan AI
          </span>{" "}
          Blog
        </h1>

        <p className="text-center text-lg md:text-[20px] text-gray-600 mt-5 max-w-3xl">
          Insights on learning science, study strategies, and the future of
          education
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto border border-[#F3F4F6] shadow-[0_20px_50px_rgba(59,130,246,0.15)] bg-white flex flex-col md:flex-row rounded-2xl overflow-hidden gap-8">

       
        <img
          src={blogHeroo}
          alt="Blog Hero"
          className="w-full md:w-1/2 object-cover"
        />

        
        <div className="px-8 py-10 md:px-12 md:py-16 flex flex-col justify-between md:w-1/2">
          
          <div>
            <p className="font-semibold text-[#3B82CD] text-sm mb-2">
              Learning Science
            </p>

            <h2 className="font-bold text-[#101828] text-2xl md:text-[32px] leading-snug">
              The Science Behind Spaced Repetition: Why It Works
            </h2>

            <p className="text-[#4A5565] text-base mt-4">
              Discover how our AI uses cognitive science principles to optimize
              your study schedule for maximum retention and minimal effort.
            </p>

           
            <div className="flex items-center gap-6 mt-6">
              
              <div className="flex items-center gap-2">
                <img src={Calendar} alt="Calendar" className="w-4 h-4" />
                <p className="text-sm text-[#6A7282]">March 2, 2026</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={Clock} alt="Clock" className="w-4 h-4" />
                <p className="text-sm text-[#6A7282]">8 min read</p>
              </div>

            </div>
          </div>

          
          <div className="flex items-center justify-between mt-6">
            <p className="font-medium text-sm text-[#364153]">
              Dr. Anon Chen
            </p>

            <button className="cursor-pointer font-semibold text-[#3B82CD] hover:underline">
              Read More
            </button>
          </div>

        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-20 px-4">

            <button className="bg-gradient-to-b from-[#3B82CD] to-[#14B8A6] text-white text-sm md:text-[16px] font-medium rounded-xl px-5 py-2">
                All Posts
            </button>

            <button className="bg-[#F3F4F6] text-sm md:text-[16px] font-medium rounded-xl px-5 py-2">
                Learning Science
            </button>

            <button className="bg-[#F3F4F6] text-sm md:text-[16px] font-medium rounded-xl px-5 py-2">
                Study Tips
            </button>

            <button className="bg-[#F3F4F6] text-sm md:text-[16px] font-medium rounded-xl px-5 py-2">
                Technology
            </button>

            <button className="bg-[#F3F4F6] text-sm md:text-[16px] font-medium rounded-xl px-5 py-2">
                Wellness
            </button>

            <button className="bg-[#F3F4F6] text-sm md:text-[16px] font-medium rounded-xl px-5 py-2">
                Productivity
            </button>

            <button className="bg-[#F3F4F6] text-sm md:text-[16px] font-medium rounded-xl px-5 py-2">
                Student Stories
            </button>

         </div>

    </div>
  );
};

export default BlogHero;