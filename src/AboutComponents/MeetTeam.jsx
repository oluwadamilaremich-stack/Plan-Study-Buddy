import React from 'react'
import { motion } from 'framer-motion'
import SSS from '../assets/SSS.png'

const MeetTeam = () => {
  // Staggering for the 6 team members
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  // Spring animation for a friendly "pop" effect
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 100, damping: 12 } 
    }
  };

  const teamMembers = [
    { name: "Dr. Anon Chen", role: "Co-Founder & CEO", bio: "Former neuroscience researcher with a passion for applying cognitive science to education." },
    { name: "Jordan Matthews", role: "Co-Founder & CTO", bio: "AI/ML expert who previously led engineering teams at top tech companies." },
    { name: "Priya Patel", role: "Head of Product", bio: "Education technology veteran dedicated to creating intuitive, impactful learning tools." },
    { name: "Marcus Williams", role: "Lead AI Researcher", bio: "PhD in Machine Learning, focused on adaptive algorithms and personalization." },
    { name: "Sofia Rodriguez", role: "Head of Design", bio: "Award-winning designer committed to creating beautiful, accessible user experiences." },
    { name: "David Kim", role: "Head of Growth", bio: "Former educator turned growth strategist, connecting students with better tools." },
  ];

  return (
    <div className='bg-white px-6 md:px-24 py-16 md:py-20'>
      <div className='flex items-center flex-col max-w-7xl mx-auto'>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center font-bold text-3xl md:text-[48px] text-[#101828]'
        >
          Meet the Team
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-center text-lg md:text-[20px] pt-4 text-[#4A5565]'
        >
          The experts behind the platform helping you succeed
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-[64px] w-full'
        >
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className='flex flex-col bg-white shadow-md p-6 rounded-2xl border border-gray-50 group transition-all hover:shadow-xl'
            >
              <div className='flex flex-col items-center gap-3'>
                <motion.img 
                  whileHover={{ scale: 1.1 }}
                  src={SSS} 
                  alt={member.name} 
                  className='w-16 h-16 rounded-full object-cover' 
                />
                <div>
                  <p className='font-bold text-center text-base text-[#101828]'>{member.name}</p>
                  <p className='text-sm font-semibold text-center text-[#3B82CD]'>{member.role}</p>
                </div>
              </div>
              <p className='text-base text-[#4A5565] text-center mt-4'>
                {member.bio}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default MeetTeam