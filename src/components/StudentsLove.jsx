import React from 'react'
import SSS from '../assets/SSS.png'
import Star from '../assets/Star.png'
import MMM from '../assets/MMM.png'
import EEE from '../assets/EEE.png'

const StudentsLove = () => {
  return (
    <div className='px-6 md:px-24 py-16 md:py-20 bg-linear-to-b from-[#F9FAFB] to-[#FFFFFF]'>
      <div className='flex items-center flex-col max-w-7xl mx-auto'>
        <h2 className='text-center font-bold text-3xl md:text-5xl text-[#101828]'>
          Students Love StudyPlan AI
        </h2>

        <p className='text-center text-lg md:text-xl pt-4 text-[#4A5565]'>
          Join thousands of students who've transformed their study habits
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 md:mt-16 w-full'>
            <div className='flex flex-col bg-white shadow-md p-6 rounded-2xl border border-gray-50'>
                <div className='flex items-center gap-3'>
                    <img src={SSS} alt="" className='w-14 h-14' />
                    <div>
                        <p className='font-bold text-base text-[#101828]'>Sarah Chen</p>
                        <p className='text-sm text-[#4A5565]'>Computer Science Major</p>
                    </div>
                </div>

                <div className='flex gap-1 mt-4'>
                    <img src={Star} alt="star" className='w-5 h-5' />
                    <img src={Star} alt="star" className='w-5 h-5' />
                    <img src={Star} alt="star" className='w-5 h-5' />
                    <img src={Star} alt="star" className='w-5 h-5' />
                    <img src={Star} alt="star" className='w-5 h-5' />
                </div>

                <p className='text-base text-[#364153] italic mt-4'>"StudyPlan AI helped me ace my finals without the all-nighters. The adaptive scheduling is a game-changer!"</p>
            </div>

            <div className='flex flex-col bg-white shadow-md p-6 rounded-2xl border border-gray-50'>
                <div className='flex items-center gap-3'>
                    <img src={MMM} alt="" className='w-14 h-14' />
                    <div>
                        <p className='font-bold text-base text-[#101828]'>Marcus Johnson</p>
                        <p className='text-sm text-[#4A5565]'>Medical Student</p>
                    </div>
                </div>

                <div className='flex gap-1 mt-4'>
                    <img src={Star} alt="star" className='w-5 h-5' />
                    <img src={Star} alt="star" className='w-5 h-5' />
                    <img src={Star} alt="star" className='w-5 h-5' />
                    <img src={Star} alt="star" className='w-5 h-5' />
                    <img src={Star} alt="star" className='w-5 h-5' />
                </div>

                <p className='text-base text-[#364153] italic mt-4'>"With so much material to cover, this app keeps me organized and confident. I actually know what I'm doing now."</p>
            </div>

            <div className='flex flex-col bg-white shadow-md p-6 rounded-2xl border border-gray-50'>
                <div className='flex items-center gap-3'>
                    <img src={EEE} alt="" className='w-14 h-14' />
                    <div>
                        <p className='font-bold text-base text-[#101828]'>Emily Rodriguez</p>
                        <p className='text-sm text-[#4A5565]'>Engineering Student</p>
                    </div>
                </div>

                <div className='flex gap-1 mt-4'>
                    <img src={Star} alt="star" className='w-5 h-5' />
                    <img src={Star} alt="star" className='w-5 h-5' />
                    <img src={Star} alt="star" className='w-5 h-5' />
                    <img src={Star} alt="star" className='w-5 h-5' />
                    <img src={Star} alt="star" className='w-5 h-5' />
                </div>

                <p className='text-base text-[#364153] italic mt-4'>"The progress tracking keeps me motivated. Seeing my improvement daily makes studying actually enjoyable!"</p>
            </div>
        </div>

        <div className="px-6 md:px-24 w-full">
            <div className='bg-linear-to-b from-[#3B82CD] to-[#14B8A6] flex flex-col items-center p-8 md:p-16 rounded-3xl mt-16 mx-auto max-w-6xl text-center'>
                <h3 className='font-bold text-3xl md:text-5xl text-white'>
                    Ready to Transform Your Study Routine?
                </h3>
                <p className='text-lg md:text-xl mt-4 text-white/90'>
                    Join thousands of students who've already discovered stress-free studying
                </p>

                <div className='flex flex-col sm:flex-row gap-4 mt-8'>
                    <button className='font-semibold text-[#3B82CD] px-8 py-4 bg-white shadow-md rounded-xl hover:bg-gray-50 transition'>
                        Download on App Store
                    </button>
                    <button className='font-semibold text-white bg-white/20 border-white/40 border-2 rounded-xl px-8 py-4 hover:bg-white/30 transition'>
                        Get it on Google Play
                    </button>
                </div>

                <p className='text-white/80 text-sm mt-6'>Free to download • No credit card required</p>
            </div>
        </div>
 
      </div>
    </div>
  )
}

export default StudentsLove
