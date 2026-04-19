import React, { useRef } from "react";
import heroImg from "../assets/heroImg.png";
import ffff from "../assets/ffff.png";
import gggg from "../assets/gggg.png";
import { motion, useScroll, useTransform } from "framer-motion";

const HomeHero = () => {
  const containerRef = useRef(null);

  // Scroll logic for the "ActiveStore" sticky effect
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-[140vh]">
      <motion.section 
        style={{ scale, opacity }}
        className="sticky top-0 w-full bg-white py-20 lg:py-28"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-16">

          {/* LEFT SIDE - Entrance added */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
          >
            <div className="space-y-2">
              <h1 className="font-bold text-5xl md:text-7xl text-[#101828] leading-tight">
                Stop stressing.
              </h1>
              <h1 className="bg-linear-to-b from-[#3B82CD] to-[#14B8A6] bg-clip-text text-transparent font-bold text-5xl md:text-7xl leading-tight">
                Start studying.
              </h1>
            </div>

            <p className="text-lg md:text-[20px] text-[#4A5565] max-w-[520px]">
              You worry about what to study. We'll handle the planning.
              Let AI create the perfect study schedule tailored to your
              exams and availability.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto justify-center lg:justify-start">
    
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-linear-to-b from-[#3B82CD] to-[#14B8A6] text-white px-6 py-2 rounded-[10px] font-medium transition-all duration-200 cursor-pointer shadow-lg"
              >
                Create Your Study Plan
              </motion.button>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer bg-[#F3F4F6] px-8 py-4 rounded-[10px] font-medium text-[18px] hover:bg-gray-200 transition"
                >
                 Watch Demo
              </motion.button>
              
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
            
            {/* IMAGE CONTAINER - Entrance added */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full max-w-[520px] h-[400px] md:h-[480px] flex items-center justify-center"
            >
              <img
                src={heroImg}
                alt="Hero"
                className="w-full h-full object-contain"
              />
            </motion.div>

            {/* FLOATING CARD 1 - Entrance + Original Loop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: [0, -12, 0] 
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.6 },
                x: { duration: 0.5, delay: 0.6 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.1 } 
              }}
              className="absolute top-0 right-0 md:right-[-10] w-40 md:w-48 flex p-3 md:p-4 gap-3 rounded-2xl bg-white shadow-xl border border-gray-100"
            >
              <img src={ffff} alt="" className="w-10 h-10 md:w-12 md:h-12" />
              <div>
                <p className="font-semibold text-xs md:text-sm text-[#101828]">AI Powered</p>
                <p className="text-[10px] md:text-xs text-[#4A5565]">Smart scheduling</p>
              </div>
            </motion.div>

            {/* FLOATING CARD 2 - Entrance + Original Loop */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: [0, 12, 0] 
              }}
              transition={{
                opacity: { duration: 0.5, delay: 0.8 },
                x: { duration: 0.5, delay: 0.8 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.3 }
              }}
              className="absolute bottom-0 left-0 md:left-6 w-40 md:w-48 flex p-3 md:p-4 gap-3 rounded-2xl bg-white shadow-xl border border-gray-100"
            >
              <img src={gggg} alt="" className="w-10 h-10 md:w-12 md:h-12" />
              <div>
                <p className="font-semibold text-xs md:text-sm text-[#101828]">Track Progress</p>
                <p className="text-[10px] md:text-xs text-[#4A5565]">Stay motivated</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Spacer for scroll-over effect */}
      <div className="h-[40vh] pointer-events-none" />
    </div>
  );
};

export default HomeHero;