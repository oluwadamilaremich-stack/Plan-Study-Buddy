import React from "react";
import { motion } from "framer-motion";
import blogHeroo from "../assets/BlogHero.png";
import Calendar from "../assets/Calendar.png";
import Clock from "../assets/Clock.png";

const BlogHero = () => {
  // Variants for category buttons stagger
  const categoryContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.6 }
    }
  };

  const categoryItem = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-linear-to-b from-[#F9FAFB] to-[#FFFFFF] px-6 md:px-24 py-16 md:py-20 overflow-hidden">
      
      {/* Title & Description */}
      <div className="flex flex-col items-center max-w-5xl mx-auto mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center font-bold text-3xl md:text-[48px] leading-tight text-[#101828]"
        >
          The{" "}
          <span className="bg-gradient-to-b from-[#3B82CD] to-[#14B8A6] bg-clip-text text-transparent">
            StudyPlan AI
          </span>{" "}
          Blog
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-lg md:text-[20px] text-gray-600 mt-5 max-w-3xl"
        >
          Insights on learning science, study strategies, and the future of
          education
        </motion.p>
      </div>

      {/* Featured Post Card */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        whileHover={{ y: -5 }}
        className="max-w-6xl mx-auto border border-[#F3F4F6] shadow-[0_20px_50px_rgba(59,130,246,0.15)] bg-white flex flex-col md:flex-row rounded-2xl overflow-hidden gap-8"
      >
        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          src={blogHeroo}
          alt="Blog Hero"
          className="w-full md:w-1/2 object-cover"
        />

        <div className="px-8 py-10 md:px-12 md:py-16 flex flex-col justify-between md:w-1/2">
          <div>
            <p className="font-semibold text-[#3B82CD] text-sm mb-2">
              Learning Science
            </p>

            <h2 className="font-bold text-[#101828] text-2xl md:text-[32px] leading-snug hover:text-[#3B82CD] transition-colors cursor-pointer">
              The Science Behind Spaced Repetition: Why It Works
            </h2>

            <p className="text-[#4A5565] text-base mt-4">
              Discover how our AI uses cognitive science principles to optimize
              your study schedule for maximum retention and minimal effort.
            </p>

            <div className="flex items-center gap-6 mt-6">
              <div className="flex items-center gap-2">
                <img src={Calendar} alt="Calendar" className="w-4 h-4" />
                <p className="text-sm text-[#6A7282]">March 2, 2026</p>
              </div>

              <div className="flex items-center gap-2">
                <img src={Clock} alt="Clock" className="w-4 h-4" />
                <p className="text-sm text-[#6A7282]">8 min read</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-6">
            <p className="font-medium text-sm text-[#364153]">
              Dr. Anon Chen
            </p>

            <motion.button 
              whileHover={{ x: 5 }}
              className="cursor-pointer font-semibold text-[#3B82CD] hover:underline flex items-center gap-1"
            >
              Read More
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div 
        variants={categoryContainer}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-3 mt-20 px-4"
      >
        {[
          { name: "All Posts", active: true },
          { name: "Learning Science" },
          { name: "Study Tips" },
          { name: "Technology" },
          { name: "Wellness" },
          { name: "Productivity" },
          { name: "Student Stories" }
        ].map((cat, idx) => (
          <motion.button
            key={idx}
            variants={categoryItem}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-sm md:text-[16px] font-medium rounded-xl px-5 py-2 transition-colors ${
              cat.active 
              ? "bg-gradient-to-b from-[#3B82CD] to-[#14B8A6] text-white" 
              : "bg-[#F3F4F6] text-[#4A5565] hover:bg-[#E5E7EB]"
            }`}
          >
            {cat.name}
          </motion.button>
        ))}
      </motion.div>

    </div>
  );
};

export default BlogHero;