import React from 'react'
import AboutImg from '../assets/AboutImg.png'

const AboutHero = () => {
  return (
    <section className='bg-gradient-to-b from-[#F9FAFB] to-[#FFFFFF] px-6 md:px-24 py-16 md:py-20'>
      
      <div className='flex items-center flex-col max-w-5xl mx-auto mb-16'>
        <h1 className='text-center font-bold text-3xl md:text-[48px] leading-tight text-[#101828]'>
          About <span className='bg-gradient-to-b from-[#3B82CD] to-[#14B8A6] bg-clip-text text-transparent'>StudyPlan AI</span>
        </h1>
        <p className='text-center text-lg md:text-[20px] text-gray-600 mt-5 max-w-3xl'>
          We're on a mission to transform how students learn by making study 
          planning effortless, intelligent, and personalized for everyone.
        </p>
      </div>

      
      
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center'>
              
          
          <div className='w-full'>
              <h2 className='font-bold text-2xl md:text-[26px]'>Our Story</h2>

              <p className='text-base text-gray-700 mt-5'>
                  StudyPlan AI was born from a simple observation: students spend more time worrying about how to study than actually studying. Our founders, former students themselves, experienced firsthand the anxiety of exam season and the struggle to create effective study schedules.
              </p>

              <p className='text-base text-gray-700 mt-4'>
                  In 2024, we brought together a team of educators, AI researchers, and software engineers to solve this problem. We combined cutting-edge machine learning with proven learning science to create an app that does more than organize—it optimizes.
              </p>

              <p className='text-base text-gray-700 mt-4'>
                  Today, thousands of students across the globe use StudyPlan AI to ace their exams with confidence and less stress. We're just getting started.
              </p>
          </div>


          <div className='w-full'>
              <img 
                  src={AboutImg} 
                  alt="About StudyPlan AI" 
                  className='w-full h-auto md:h-[410px] rounded-2xl shadow-xl object-cover'
              />
          </div>

      </div>
    </section>
  )
}

export default AboutHero