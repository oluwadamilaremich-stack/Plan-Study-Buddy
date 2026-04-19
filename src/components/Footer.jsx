import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logoo from "../assets/logoo.png";
import { motion } from "framer-motion";

const Footer = () => {
  // Variants for staggered column entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="relative z-10 bg-[#071428] text-gray-400 px-6 lg:px-24 py-16 overflow-hidden">
      {/* Visual Flair: Animated Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#3B82CD]/50 to-transparent" />
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-[#3B82CD]/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo + Description */}
          <motion.div variants={itemVariants}>
            <Link to="/" className="flex items-center gap-3 mb-4 group transition">
              <img src={Logoo} alt="logo" className="w-8 h-8" />
              <span className="text-white font-semibold text-lg group-hover:text-[#3B82CD] transition-colors">
                StudyPlan AI
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#99A1AF]">
              Smart study planning powered by AI. Stop stressing, start studying.
            </p>
          </motion.div>

          {/* Product */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-[#99A1AF]">
              {["Features", "How It Works", "Pricing", "FAQ"].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-[#99A1AF]">
              {["About Us", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-white hover:translate-x-1 inline-block transition-all duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: <FaTwitter size={16} />, label: "Twitter" },
                { icon: <FaInstagram size={16} />, label: "Instagram" },
                { icon: <FaGithub size={16} />, label: "Github" },
                { icon: <FiMail size={16} />, label: "Mail" },
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  whileHover={{ y: -5, scale: 1.1, backgroundColor: "#3B82CD" }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 flex items-center justify-center bg-[#1E2939] rounded-md text-white transition-colors cursor-pointer"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider & Bottom Section */}
        <motion.div 
          variants={itemVariants}
          className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm"
        >
          <p>© 2025 StudyPlan AI. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((policy) => (
              <Link key={policy} to="#" className="hover:text-white transition-colors">
                {policy}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;