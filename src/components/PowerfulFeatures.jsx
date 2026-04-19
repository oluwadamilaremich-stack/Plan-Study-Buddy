import React from 'react'
import { motion } from 'framer-motion'
import First from '../assets/1.png'
import Second from '../assets/2.png'
import Third from '../assets/3.png'
import Fourth from '../assets/4.png'

const PowerfulFeatures = () => {
  // Container variant to handle the staggering of the 4 cards
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Sequential delay for each card
      },
    },
  };

  // Individual card variant: slide up and fade in
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <div className='relative z-10 bg-linear-to-b from-[#FFFFFF] to-[#F9FAFB] px-6 md:px-24 py-16 md:py-20'>
      <div className='flex items-center flex-col max-w-7xl mx-auto'>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-center font-bold text-3xl md:text-[48px] text-[#101828]'
        >
          Powerful Features
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-center text-lg md:text-[20px] pt-4 text-[#4A5565]'
        >
          Everything you need to ace your exams
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-[63.99px] w-full'
        >

            {/* CARD 1 */}
            <motion.div variants={cardVariants} className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
                <img src={First} alt="" className='w-14 h-14' />
                <p className='font-bold text-[#101828] text-[20px] mt-4'>AI Scheduling</p>
                <p className='text-[#4A5565] text-[16px] mt-3 leading-relaxed'>
                  Smart algorithms optimize your study time based on cognitive science
                </p>
            </motion.div>

            {/* CARD 2 */}
            <motion.div variants={cardVariants} className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
                <img src={Second} alt="" className='w-14 h-14' />
                <p className='font-bold text-[#101828] text-[20px] mt-4'>Progress Tracking</p>
                <p className='text-[#4A5565] text-[16px] mt-3 leading-relaxed'>
                  Visualize your journey and stay motivated with detailed analytics
                </p>
            </motion.div>

            {/* CARD 3 */}
            <motion.div variants={cardVariants} className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
                <img src={Third} alt="" className='w-14 h-14' />
                <p className='font-bold text-[#101828] text-[20px] mt-4'>Smart Reminders</p>
                <p className='text-[#4A5565] text-[16px] mt-3 leading-relaxed'>
                  Never miss a session with adaptive notifications that fit your flow
                </p>
            </motion.div>

            {/* CARD 4 */}
            <motion.div variants={cardVariants} className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
                <img src={Fourth} alt="" className='w-14 h-14' />
                <p className='font-bold text-[#101828] text-[20px] mt-4'>Resource Hub</p>
                <p className='text-[#4A5565] text-[16px] mt-3 leading-relaxed'>
                  Centralize your notes, links, and materials for every subject
                </p>
            </motion.div>
            
        </motion.div>
      </div>
    </div>
  )
}

export default PowerfulFeatures