import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logoo from "../assets/logoo.png";

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
          <NavLink to="/" className="hover:text-[#3B82CD] transition">
            Home
          </NavLink>

          <NavLink to="/about" className="hover:text-[#3B82CD] transition">
            About
          </NavLink>

          <NavLink to="/blog" className="hover:text-[#3B82CD] transition">
            Blog
          </NavLink>

          <NavLink to="/careers" className="hover:text-[#3B82CD] transition">
            Careers
          </NavLink>

          <NavLink to="/contact" className="hover:text-[#3B82CD] transition">
            Contact
          </NavLink>
        </div>

        {/* Desktop Get Started */}
        <div className="hidden md:block">
          <Link
            to="/onboarding"
            className="bg-gradient-to-b from-[#3B82CD] to-[#14B8A6] text-white px-6 py-2 rounded-[10px] font-medium hover:opacity-90 transition"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col items-center gap-6 py-6 text-[16px]">

          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>
            About
          </NavLink>

          <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </NavLink>

          <NavLink to="/careers" onClick={() => setMenuOpen(false)}>
            Careers
          </NavLink>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>

          {/* Mobile Get Started */}
          <Link
            to="/onboarding"
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-b from-[#3B82CD] to-[#14B8A6] text-white px-6 py-2 rounded-[10px] font-medium hover:opacity-90 transition active:scale-95"
          >
            Get Started
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Nav;