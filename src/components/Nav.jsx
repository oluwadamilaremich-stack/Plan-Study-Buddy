import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logoo from "../assets/logoo.png";
import { motion, AnimatePresence } from 'framer-motion'

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[66px] px-6 lg:px-24">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logoo}
            alt="StudyPlan AI Logo"
            className="w-8 h-8"
          />
          <span className="font-semibold text-[20px] whitespace-nowrap">
            StudyPlan AI
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-[16px] text-black">
          <NavLink to="/" className={({ isActive }) => 
            `hover:text-[#3B82CD] transition ${isActive ? 'text-[#3B82CD] font-bold' : ''}`
          }>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => 
            `hover:text-[#3B82CD] transition ${isActive ? 'text-[#3B82CD] font-bold' : ''}`
          }>
            About
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => 
            `hover:text-[#3B82CD] transition ${isActive ? 'text-[#3B82CD] font-bold' : ''}`
          }>
            Blog
          </NavLink>
          <NavLink to="/careers" className={({ isActive }) => 
            `hover:text-[#3B82CD] transition ${isActive ? 'text-[#3B82CD] font-bold' : ''}`
          }>
            Careers
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => 
            `hover:text-[#3B82CD] transition ${isActive ? 'text-[#3B82CD] font-bold' : ''}`
          }>
            Contact
          </NavLink>
        </div>

        {/* Desktop Get Started - Animated as requested */}
        <div className="hidden md:block">
          <Link to="/onboarding">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-b from-[#3B82CD] to-[#14B8A6] text-white px-6 py-2 rounded-[10px] font-medium transition-all duration-200 cursor-pointer shadow-lg inline-block"
            >
              Get Started
            </motion.button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-100 flex flex-col items-center gap-6 py-6 text-[16px] overflow-hidden"
          >
            <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
            <NavLink to="/blog" onClick={() => setMenuOpen(false)}>Blog</NavLink>
            <NavLink to="/careers" onClick={() => setMenuOpen(false)}>Careers</NavLink>
            <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

            {/* Mobile Get Started - Also Animated */}
            <Link to="/onboarding" onClick={() => setMenuOpen(false)}>
              <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="bg-gradient-to-b from-[#3B82CD] to-[#14B8A6] text-white px-6 py-2 rounded-[10px] font-medium transition-all duration-200 cursor-pointer shadow-lg"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;