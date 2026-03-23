import React from 'react'
import aaa from '../assets/aaa.png'
import bbb from '../assets/bbb.png'
import ccc from '../assets/ccc.png'

const HowItWorks = () => {
  return (
    <div className='bg-white px-6 md:px-24 py-16 md:py-20'>
      <div className='flex items-center flex-col max-w-7xl mx-auto'>
        <h1 className='text-center font-bold text-3xl md:text-[48px] text-[#101828]'>How It Works</h1>
        <p className='text-center text-lg md:text-[20px] pt-4 text-[#4A5565]'>
            Get your personalized study plan in three simple steps
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mt-20 md:mt-[63.99px]'>
            <div className='relative flex flex-col bg-white shadow-md pt-8 pb-10 px-8 rounded-2xl border border-gray-50'>
                <p className='text-[#F3F4F6] font-bold text-[60px] leading-none mb-2'>01</p>
                <h3 className='text-[#101828] font-bold text-[24px] mb-2'>Enter Your Exams</h3>
                <p className='text-[#4A5565] text-[16px] leading-relaxed'>
                  Add your exam dates, subjects, and topics. Tell us what you need to master.
                </p>

                <div className='absolute left-6 -top-6'>
                    <img src={aaa} alt="" className='w-14 h-14 md:w-16 md:h-16 drop-shadow-sm' />
                </div>
            </div>

            <div className='relative flex flex-col bg-white shadow-md pt-8 pb-10 px-8 rounded-2xl border border-gray-50'>
                <p className='text-[#F3F4F6] font-bold text-[60px] leading-none mb-2'>02</p>
                <h3 className='text-[#101828] font-bold text-[24px] mb-2'>Set Your Availability</h3>
                <p className='text-[#4A5565] text-[16px] leading-relaxed'>
                  Share your schedule and preferences. We'll work around your life, not the other way around.
                </p>

                <div className='absolute left-6 -top-6'>
                    <img src={bbb} alt="" className='w-14 h-14 md:w-16 md:h-16 drop-shadow-sm' />
                </div>
            </div>

            <div className='relative flex flex-col bg-white shadow-md pt-8 pb-10 px-8 rounded-2xl border border-gray-50'>
                <p className='text-[#F3F4F6] font-bold text-[60px] leading-none mb-2'>03</p>
                <h3 className='text-[#101828] font-bold text-[24px] mb-2'>Get Your Plan</h3>
                <p className='text-[#4A5565] text-[16px] leading-relaxed'>
                  Receive an AI-optimized study schedule that adapts to your progress in real-time.
                </p>

                <div className='absolute left-6 -top-6'>
                    <img src={ccc} alt="" className='w-14 h-14 md:w-16 md:h-16 drop-shadow-sm' />
                </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default HowItWorks
