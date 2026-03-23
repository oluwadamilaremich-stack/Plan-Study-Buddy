import React from "react";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logoo from "../assets/logoo.png";

const Footer = () => {
  return (
    <footer className="bg-[#071428] text-gray-400 px-6 lg:px-24 py-16">

      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo + Description */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4 group transition">
              <img src={Logoo} alt="logo" className="w-8 h-8" />
              <span className="text-white font-semibold text-lg group-hover:text-[#3B82CD] transition-colors">
                StudyPlan AI
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-[#99A1AF]">
              Smart study planning powered by AI. Stop stressing, start studying.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-[#99A1AF]">
              <li><Link to="#" className="hover:text-white transition">Features</Link></li>
              <li><Link to="#" className="hover:text-white transition">How It Works</Link></li>
              <li><Link to="#" className="hover:text-white transition">Pricing</Link></li>
              <li><Link to="#" className="hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-[#99A1AF] ">
              <li><Link to="#" className="hover:text-white transition">About Us</Link></li>
              <li><Link to="#" className="hover:text-white transition">Blog</Link></li>
              <li><Link to="#" className="hover:text-white transition">Careers</Link></li>
              <li><Link to="#" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>

            <div className="flex gap-3">
              <a className="w-9 h-9 flex items-center justify-center bg-[#1E2939] rounded-md hover:bg-[#1b335d] transition">
                <FaTwitter size={16} className="text-white"/>
              </a>

              <a className="w-9 h-9 flex items-center justify-center bg-[#1E2939] rounded-md hover:bg-[#1b335d] transition">
                <FaInstagram size={16} className="text-white" />
              </a>

              <a className="w-9 h-9 flex items-center justify-center bg-[#1E2939] rounded-md hover:bg-[#1b335d] transition">
                <FaGithub size={16} className="text-white" />
              </a>

              <a className="w-9 h-9 flex items-center justify-center bg-[#1E2939] rounded-md hover:bg-[#1b335d] transition">
                <FiMail size={16} className="text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm">

          <p>© 2025 StudyPlan AI. All rights reserved.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
            <Link to="#">Cookie Policy</Link>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;