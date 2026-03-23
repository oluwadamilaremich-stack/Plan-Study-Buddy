import React from 'react'

const HomeSect1 = () => {
  return (
    <div className='bg-linear-to-b from-[#F9FAFB] to-[#FFFFFF] px-6 md:px-24 py-16 md:py-20'>
      <div className='flex items-center flex-col max-w-5xl mx-auto'>
        
        <h2 className='text-center font-bold text-3xl md:text-[48px] leading-tight text-[#101828]'>
          The Problem with Traditional Studying
        </h2>
        <p className='text-center text-lg md:text-[20px] text-gray-600 mt-5 max-w-3xl'>
          You know you need to study, but creating an effective plan is overwhelming. 
          What topics should you prioritize? When should you review? How do you fit it all in?
        </p>

        <div className="mt-12 md:mt-14 p-1 rounded-2xl bg-linear-to-r from-[#3B82CD] to-[#14B8A6] w-full max-w-4xl">
          <div className="bg-white rounded-[14px] py-6 px-4 md:py-8">
            <p className="font-semibold text-xl md:text-[24px] text-center text-black">
              We turn chaos into clarity with AI-powered study planning
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeSect1
