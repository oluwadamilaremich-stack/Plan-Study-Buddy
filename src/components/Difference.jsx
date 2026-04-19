import React from 'react'
import { motion } from 'framer-motion'
import LR from '../assets/LR.png'
import RR from '../assets/RR.png'

const Difference = () => {
  return (
    <div className='relative z-10 bg-white px-6 md:px-24 py-16 md:py-[72.1px]'>
      <div className='max-w-7xl mx-auto'>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center font-bold text-3xl md:text-[48px] text-[#101828]'
        >
          The Difference is Clear
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-center text-lg md:text-[20px] pt-4 text-[#4A5565]'
        >
          See how StudyPlan AI transforms your study routine
        </motion.p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 mt-12 md:mt-[63.98px] overflow-hidden'> 
            
            {/* Left Card: Slides in from left */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='border-[#FFC9C9] border-2 rounded-2xl overflow-hidden'
            >
                <img src={LR} alt="LR" className='w-full h-auto object-cover'/>
                <div className='p-5 md:p-[15.99px]'>
                    <p className='font-bold text-[#101828] text-xl md:text-[24px]'>Chaos & Confusion</p>
                    <p className='text-[#4A5565] text-base md:text-[16px] mt-2'>
                      Scattered notes, no clear plan, constant stress about what to study next
                    </p>
                </div>
            </motion.div>

            {/* Right Card: Slides in from right */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className='border-[#96F7E4] border-2 rounded-2xl overflow-hidden'
            >
                <img src={RR} alt="LR" className='w-full h-auto object-cover' />
                <div className='p-5 md:p-[15.99px]'>
                    <p className='font-bold text-[#101828] text-xl md:text-[24px]'>Order & Confidence</p>
                    <p className='text-[#4A5565] text-base md:text-[16px] mt-2'>
                      Crystal-clear schedule, optimized study sessions, peace of mind
                    </p>
                </div>
            </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Difference