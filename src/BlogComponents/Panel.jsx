import React from 'react'
import Logoo from "../assets/logoo.png";
import Calendar from "../assets/Calendar.png";
import Clock from "../assets/Clock.png";

const Panel = () => {
  return (
    <div className='bg-linear-to-b from-[#FFFFFF] to-[#F9FAFB] px-6 md:px-24 py-20  md:py-20'>
      <div className='flex items-center flex-col max-w-7xl mx-auto'>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8  w-full'>
            
            {/*1stcard*/}
            <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
              <img src={Logoo} alt="" className='w-14 h-14' />
              <p className='font-semibold text-[#3B82CD] text-[14px] mt-[23.99px]'>Study Tips</p>
              <p className='font-bold text-[#101828] text-[20px] mt-4'>5 Study Habits That Actually Work (According to Research)</p>
              <p className='text-[#4A5565] text-[16px] mt-2 leading-relaxed'>
                Evidence-based strategies that top students use to maximize their learning efficiency.
              </p>

              <div className="flex items-center gap-6 mt-3">
                            
                <div className="flex items-center gap-2">
                  <img src={Calendar} alt="Calendar" className="w-4 h-4" />
                  <p className="text-sm text-[#6A7282]">February 28, 2026</p>
                </div>
  
                <div className="flex items-center gap-2">
                  <img src={Clock} alt="Clock" className="w-4 h-4" />
                  <p className="text-sm text-[#6A7282]">6 min read</p>
                </div>
              
              </div>

              <div className="flex items-center justify-between mt-6 border-t-1 border-[#F3F4F6] pt-2">
                <p className="font-medium text-[14px] text-[#364153]">
                  Priya Patel
                </p>

                <button className="cursor-pointer font-semibold text-[#3B82CD] text-[14px] hover:underline">
                  Read More
                </button>
              </div>

            </div>
            
            {/*2ndcard*/} 
            <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
              <img src={Logoo} alt="" className='w-14 h-14' />
              <p className='font-semibold text-[#3B82CD] text-[14px] mt-[23.99px]'>Technology</p>
              <p className='font-bold text-[#101828] text-[20px] mt-4'>How AI is Revolutionizing Personal Education</p>
              <p className='text-[#4A5565] text-[16px] mt-2 leading-relaxed'>
                A deep dive into machine learning algorithms that adapt to your unique learning style.
              </p>

              <div className="flex items-center gap-6 mt-3">
                            
                <div className="flex items-center gap-2">
                  <img src={Calendar} alt="Calendar" className="w-4 h-4" />
                  <p className="text-sm text-[#6A7282]">February 25, 2026</p>
                </div>
  
                <div className="flex items-center gap-2">
                  <img src={Clock} alt="Clock" className="w-4 h-4" />
                  <p className="text-sm text-[#6A7282]">10 min read</p>
                </div>
              
              </div>

              <div className="flex items-center justify-between mt-6 border-t-1 border-[#F3F4F6] pt-2">
                <p className="font-medium text-[14px] text-[#364153]">
                  Marcus Williams
                </p>

                <button className="cursor-pointer font-semibold text-[#3B82CD] text-[14px] hover:underline">
                  Read More
                </button>
              </div>

            </div>

            {/*3rdcard*/}
            <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
              <img src={Logoo} alt="" className='w-14 h-14' />
              <p className='font-semibold text-[#3B82CD] text-[14px] mt-[23.99px]'>Wellness</p>
              <p className='font-bold text-[#101828] text-[20px] mt-4'>Managing Exam Anxiety: A Student's Guide</p>
              <p className='text-[#4A5565] text-[16px] mt-2 leading-relaxed'>
                Practical techniques to stay calm, focused, and confident during high-pressure exam periods.
              </p>

              <div className="flex items-center gap-6 mt-3">
                            
                <div className="flex items-center gap-2">
                  <img src={Calendar} alt="Calendar" className="w-4 h-4" />
                  <p className="text-sm text-[#6A7282]">February 22, 2026</p>
                </div>
  
                <div className="flex items-center gap-2">
                  <img src={Clock} alt="Clock" className="w-4 h-4" />
                  <p className="text-sm text-[#6A7282]">7 min read</p>
                </div>
              
              </div>

              <div className="flex items-center justify-between mt-6 border-t-1 border-[#F3F4F6] pt-2">
                <p className="font-medium text-[14px] text-[#364153]">
                  Sofia Rodriguez
                </p>

                <button className="cursor-pointer font-semibold text-[#3B82CD] text-[14px] hover:underline">
                  Read More
                </button>
              </div>

            </div>

            {/*4thcard*/}
            <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
              <img src={Logoo} alt="" className='w-14 h-14' />
              <p className='font-semibold text-[#3B82CD] text-[14px] mt-[23.99px]'>Productivity</p>
              <p className='font-bold text-[#101828] text-[20px] mt-4'>The Perfect Study Environment: What Science Says</p>
              <p className='text-[#4A5565] text-[16px] mt-2 leading-relaxed'>
                Learn how to optimize your physical space for concentration and productivity.
              </p>

              <div className="flex items-center gap-6 mt-3">
                            
                <div className="flex items-center gap-2">
                  <img src={Calendar} alt="Calendar" className="w-4 h-4" />
                  <p className="text-sm text-[#6A7282]">February 18, 2026</p>
                </div>
  
                <div className="flex items-center gap-2">
                  <img src={Clock} alt="Clock" className="w-4 h-4" />
                  <p className="text-sm text-[#6A7282]">8 min read</p>
                </div>
              
              </div>

              <div className="flex items-center justify-between mt-6 border-t-1 border-[#F3F4F6] pt-2">
                <p className="font-medium text-[14px] text-[#364153]">
                  Priya Patel
                </p>

                <button className="cursor-pointer font-semibold text-[#3B82CD] text-[14px] hover:underline">
                  Read More
                </button>
              </div>

            </div>

            {/*5thcard*/}
            <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
              <img src={Logoo} alt="" className='w-14 h-14' />
              <p className='font-semibold text-[#3B82CD] text-[14px] mt-[23.99px]'>Student Stories</p>
              <p className='font-bold text-[#101828] text-[20px] mt-4'>From All-Nighters to Smart Planning: A Student's Journey</p>
              <p className='text-[#4A5565] text-[16px] mt-2 leading-relaxed'>
                Real stories from students who transformed their study habits with StudyPlan AI.
              </p>

              <div className="flex items-center gap-6 mt-3">
                            
                <div className="flex items-center gap-2">
                  <img src={Calendar} alt="Calendar" className="w-4 h-4" />
                  <p className="text-sm text-[#6A7282]">February 15, 2026</p>
                </div>
  
                <div className="flex items-center gap-2">
                  <img src={Clock} alt="Clock" className="w-4 h-4" />
                  <p className="text-sm text-[#6A7282]">8 min read</p>
                </div>
              
              </div>

              <div className="flex items-center justify-between mt-6 border-t-1 border-[#F3F4F6] pt-2">
                <p className="font-medium text-[14px] text-[#364153]">
                  Priya Patel
                </p>

                <button className="cursor-pointer font-semibold text-[#3B82CD] text-[14px] hover:underline">
                  Read More
                </button>
              </div>

            </div>

            {/*6thcard*/}
            <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
              <img src={Logoo} alt="" className='w-14 h-14' />
              <p className='font-semibold text-[#3B82CD] text-[14px] mt-[23.99px]'>Learning Science</p>
              <p className='font-bold text-[#101828] text-[20px] mt-4'>Understanding Your Learning Style with AI</p>
              <p className='text-[#4A5565] text-[16px] mt-2 leading-relaxed'>
                How our platform identifies and adapts to whether you're a visual, auditory, or kinesthetic learner.
              </p>

              <div className="flex items-center gap-6 mt-3">
                            
                <div className="flex items-center gap-2">
                  <img src={Calendar} alt="Calendar" className="w-4 h-4" />
                  <p className="text-sm text-[#6A7282]">March 2, 2026</p>
                </div>
  
                <div className="flex items-center gap-2">
                  <img src={Clock} alt="Clock" className="w-4 h-4" />
                  <p className="text-sm text-[#6A7282]">8 min read</p>
                </div>
              
              </div>

              <div className="flex items-center justify-between mt-6 border-t-1 border-[#F3F4F6] pt-2">
                <p className="font-medium text-[14px] text-[#364153]">
                  Dr. Anon Chen
                </p>

                <button className="cursor-pointer font-semibold text-[#3B82CD] text-[14px] hover:underline">
                  Read More
                </button>
              </div>

            </div>
            
        </div>

        <div className='flex justify-center mt-[47.99px]'>
          <button className="bg-linear-to-b from-[#3B82CD] to-[#14B8A6] text-white px-6 py-2 rounded-[10px] font-medium transition-all duration-200 hover:opacity-80 active:scale-95 cursor-pointer">
            Load More Articles
          </button>
        </div>

      </div>
      </div>
  )
}

export default Panel
