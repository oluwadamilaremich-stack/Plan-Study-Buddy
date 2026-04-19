import React from 'react'
import { motion } from 'framer-motion'
import Logoo from "../assets/logoo.png";
import Calendar from "../assets/Calendar.png";
import Clock from "../assets/Clock.png";

const Panel = () => {
  const posts = [
    { category: "Study Tips", title: "5 Study Habits That Actually Work (According to Research)", author: "Priya Patel", date: "February 28, 2026", time: "6 min read", desc: "Evidence-based strategies that top students use to maximize their learning efficiency." },
    { category: "Technology", title: "How AI is Revolutionizing Personal Education", author: "Marcus Williams", date: "February 25, 2026", time: "10 min read", desc: "A deep dive into machine learning algorithms that adapt to your unique learning style." },
    { category: "Wellness", title: "Managing Exam Anxiety: A Student's Guide", author: "Sofia Rodriguez", date: "February 22, 2026", time: "7 min read", desc: "Practical techniques to stay calm, focused, and confident during high-pressure exam periods." },
    { category: "Productivity", title: "The Perfect Study Environment: What Science Says", author: "Priya Patel", date: "February 18, 2026", time: "8 min read", desc: "Learn how to optimize your physical space for concentration and productivity." },
    { category: "Student Stories", title: "From All-Nighters to Smart Planning: A Student's Journey", author: "Priya Patel", date: "February 15, 2026", time: "8 min read", desc: "Real stories from students who transformed their study habits with StudyPlan AI." },
    { category: "Learning Science", title: "Understanding Your Learning Style with AI", author: "Dr. Anon Chen", date: "March 2, 2026", time: "8 min read", desc: "How our platform identifies and adapts to whether you're a visual, auditory, or kinesthetic learner." },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  return (
    <div className='bg-linear-to-b from-[#FFFFFF] to-[#F9FAFB] px-6 md:px-24 py-20 md:py-20'>
      <div className='flex items-center flex-col max-w-7xl mx-auto'>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full'
        >
          {posts.map((post, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50 transition-shadow hover:shadow-xl'
            >
              <img src={Logoo} alt="" className='w-14 h-14' />
              <p className='font-semibold text-[#3B82CD] text-[14px] mt-[23.99px]'>{post.category}</p>
              <p className='font-bold text-[#101828] text-[20px] mt-4'>{post.title}</p>
              <p className='text-[#4A5565] text-[16px] mt-2 leading-relaxed'>
                {post.desc}
              </p>

              <div className="flex items-center gap-6 mt-3">
                <div className="flex items-center gap-2">
                  <img src={Calendar} alt="Calendar" className="w-4 h-4" />
                  <p className="text-sm text-[#6A7282]">{post.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <img src={Clock} alt="Clock" className="w-4 h-4" />
                  <p className="text-sm text-[#6A7282]">{post.time}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mt-6 border-t border-[#F3F4F6] pt-2">
                <p className="font-medium text-[14px] text-[#364153]">{post.author}</p>
                <button className="cursor-pointer font-semibold text-[#3B82CD] text-[14px] hover:underline">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='flex justify-center mt-[47.99px]'
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-linear-to-b from-[#3B82CD] to-[#14B8A6] text-white px-6 py-2 rounded-[10px] font-medium transition-all duration-200 cursor-pointer shadow-lg"
          >
            Load More Articles
          </motion.button>
        </motion.div>

      </div>
    </div>
  )
}

export default Panel