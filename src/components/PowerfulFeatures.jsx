import React from 'react'
import First from '../assets/1.png'
import Second from '../assets/2.png'
import Third from '../assets/3.png'
import Fourth from '../assets/4.png'

const PowerfulFeatures = () => {
  return (
    <div className='bg-linear-to-b from-[#FFFFFF] to-[#F9FAFB] px-6 md:px-24 py-16 md:py-20'>
      <div className='flex items-center flex-col max-w-7xl mx-auto'>
        <h1 className='text-center font-bold text-3xl md:text-[48px] text-[#101828]'>Powerful Features</h1>
        <p className='text-center text-lg md:text-[20px] pt-4 text-[#4A5565]'>
            Everything you need to ace your exams
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-[63.99px] w-full'>

            <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
                <img src={First} alt="" className='w-14 h-14' />
                <p className='font-bold text-[#101828] text-[20px] mt-4'>AI Scheduling</p>
                <p className='text-[#4A5565] text-[16px] mt-3 leading-relaxed'>
                  Smart algorithms optimize your study time based on cognitive science
                </p>
            </div>

            <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
                <img src={Second} alt="" className='w-14 h-14' />
                <p className='font-bold text-[#101828] text-[20px] mt-4'>Progress Tracking</p>
                <p className='text-[#4A5565] text-[16px] mt-3 leading-relaxed'>
                  Visualize your journey and stay motivated with detailed analytics
                </p>
            </div>

            <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
                <img src={Third} alt="" className='w-14 h-14' />
                <p className='font-bold text-[#101828] text-[20px] mt-4'>Smart Reminders</p>
                <p className='text-[#4A5565] text-[16px] mt-3 leading-relaxed'>
                  Never miss a session with adaptive notifications that fit your flow
                </p>
            </div>

            <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
                <img src={Fourth} alt="" className='w-14 h-14' />
                <p className='font-bold text-[#101828] text-[20px] mt-4'>Resource Hub</p>
                <p className='text-[#4A5565] text-[16px] mt-3 leading-relaxed'>
                  Centralize your notes, links, and materials for every subject
                </p>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default PowerfulFeatures
