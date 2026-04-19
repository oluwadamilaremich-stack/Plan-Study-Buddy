import React from 'react'
import { motion } from 'framer-motion'

const HomeSect1 = () => {
  return (
    /* Added relative and z-10 so this section slides OVER the sticky hero */
    <div className='relative z-10 bg-linear-to-b from-[#F9FAFB] to-[#FFFFFF] px-6 md:px-24 py-16 md:py-20'>
      <div className='flex items-center flex-col max-w-5xl mx-auto'>
        
        {/* Title: Fades up when in view */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center font-bold text-3xl md:text-[48px] leading-tight text-[#101828]'
        >
          The Problem with Traditional Studying
        </motion.h2>

        {/* Subtext: Fades up with a slight delay */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-center text-lg md:text-[20px] text-gray-600 mt-5 max-w-3xl'
        >
          You know you need to study, but creating an effective plan is overwhelming. 
          What topics should you prioritize? When should you review? How do you fit it all in?
        </motion.p>

        {/* Gradient Card: Scales in gently */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 md:mt-14 p-1 rounded-2xl bg-linear-to-r from-[#3B82CD] to-[#14B8A6] w-full max-w-4xl"
        >
          <div className="bg-white rounded-[14px] py-6 px-4 md:py-8">
            <p className="font-semibold text-xl md:text-[24px] text-center text-black">
              We turn chaos into clarity with AI-powered study planning
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default HomeSect1