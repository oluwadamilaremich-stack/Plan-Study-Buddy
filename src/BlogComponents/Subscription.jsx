import React from 'react'
import { motion } from 'framer-motion'

const Subscription = () => {
  return (
    <div>
      <div className="px-6 md:px-24 w-full mb-[79.98px] mt-[79.98px]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className='bg-linear-to-b from-[#3B82CD] to-[#14B8A6] flex flex-col items-center p-8 md:p-16 rounded-3xl mt-16 mx-auto max-w-6xl text-center shadow-2xl'
        >
          <motion.h3 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='font-bold text-3xl md:text-5xl text-white'
          >
            Never Miss an Update
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className='text-lg md:text-xl text-center mt-4 text-white/90'
          >
            Get the latest study tips, learning science insights, and product updates delivered <br className="hidden md:block" />to your inbox
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className='flex flex-col sm:flex-row gap-4 mt-8'
          >
            <motion.input 
              whileFocus={{ scale: 1.02 }}
              className='font-semibold text-white placeholder:text-white/60 bg-white/20 border-white/40 border-2 w-full sm:w-[301.66px] rounded-xl px-8 py-4 outline-hidden focus:border-white transition-all' 
              placeholder='Enter your email'
            />

            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className='cursor-pointer font-semibold text-[#3B82CD] px-8 py-4 bg-white shadow-md rounded-xl transition'
            >
              Subscribe
            </motion.button>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className='text-white/80 text-sm mt-6'
          >
            Join 10,000+ students already subscribed
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}

export default Subscription