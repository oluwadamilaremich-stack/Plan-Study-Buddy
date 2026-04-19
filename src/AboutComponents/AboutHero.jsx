import React from 'react'
import { motion } from 'framer-motion'
import AboutImg from '../assets/AboutImg.png'

const AboutHero = () => {
  return (
    <section className='bg-gradient-to-b from-[#F9FAFB] to-[#FFFFFF] px-6 md:px-24 py-16 md:py-20 overflow-hidden'>
      
      {/* Top Header Section */}
      <div className='flex items-center flex-col max-w-5xl mx-auto mb-16'>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center font-bold text-3xl md:text-[48px] leading-tight text-[#101828]'
        >
          About <span className='bg-gradient-to-b from-[#3B82CD] to-[#14B8A6] bg-clip-text text-transparent'>StudyPlan AI</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-center text-lg md:text-[20px] text-gray-600 mt-5 max-w-3xl'
        >
          We're on a mission to transform how students learn by making study 
          planning effortless, intelligent, and personalized for everyone.
        </motion.p>
      </div>

      {/* Content Grid */}
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center'>
          
          {/* Left Text: Slides in from left */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='w-full'
          >
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
          </motion.div>

          {/* Right Image: Zooms in gently */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='w-full'
          >
              <motion.img 
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                  src={AboutImg} 
                  alt="About StudyPlan AI" 
                  className='w-full h-auto md:h-[410px] rounded-2xl shadow-xl object-cover'
              />
          </motion.div>

      </div>
    </section>
  )
}

export default AboutHero