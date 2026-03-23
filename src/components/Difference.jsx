import React from 'react'
import LR from '../assets/LR.png'
import RR from '../assets/RR.png'

const Difference = () => {
  return (
    <div className='bg-white px-6 md:px-24 py-16 md:py-[72.1px]'>
      <div className='max-w-7xl mx-auto'>
        <h1 className='text-center font-bold text-3xl md:text-[48px] text-[#101828]'>
          The Difference is Clear
        </h1>
        <p className='text-center text-lg md:text-[20px] pt-4 text-[#4A5565]'>
          See how StudyPlan AI transforms your study routine
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 mt-12 md:mt-[63.98px]'> 
            <div className='border-[#FFC9C9] border-2 rounded-2xl overflow-hidden'>
                <img src={LR} alt="LR" className='w-full h-auto object-cover'/>
                <div className='p-5 md:p-[15.99px]'>
                    <p className='font-bold text-[#101828] text-xl md:text-[24px]'>Chaos & Confusion</p>
                    <p className='text-[#4A5565] text-base md:text-[16px] mt-2'>
                      Scattered notes, no clear plan, constant stress about what to study next
                    </p>
                </div>
            </div>

            <div className='border-[#96F7E4] border-2 rounded-2xl overflow-hidden'>
                <img src={RR} alt="LR" className='w-full h-auto object-cover' />
                <div className='p-5 md:p-[15.99px]'>
                    <p className='font-bold text-[#101828] text-xl md:text-[24px]'>Order & Confidence</p>
                    <p className='text-[#4A5565] text-base md:text-[16px] mt-2'>
                      Crystal-clear schedule, optimized study sessions, peace of mind
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Difference
