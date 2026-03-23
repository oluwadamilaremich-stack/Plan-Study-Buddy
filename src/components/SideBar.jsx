import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import PlanImg from "../assets/PlanImg.png";
import { FaHome, FaBook, FaRegUser } from "react-icons/fa";
import { FiMessageSquare, FiLogOut } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";
import { useStudy } from "../context/StudyContext"; 
import { useAuth } from "../context/AuthContext";

const SideBar = ({ isOpen, setIsOpen }) => {
  const { userData } = useStudy(); 
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();
  
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // PRIORITY FIX: Look at Context data first
  const profileName = userData?.profile?.name || currentUser?.displayName || "Scholar";
  const avatar = userData?.profile?.avatar || currentUser?.photoURL || null;

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error("Failed to log out", error);
    }
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-[#101828]/50 backdrop-blur-sm z-[110] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside className={`
        fixed inset-y-0 left-0 z-[120] w-[280px] bg-white border-r border-gray-200 flex flex-col justify-between transition-transform duration-300 ease-in-out
        lg:relative lg:translate-x-0 lg:w-[260px]
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        
        <div>
          <div className="py-6 px-6 flex items-center justify-between border-b border-gray-50">
            <div className="flex items-center gap-3">
              <img src={PlanImg} alt="Logo" className="w-9 h-9 object-contain"/>
              <div className="flex flex-col">
                <h2 className="font-bold text-xl leading-none text-[#101828]">Plan</h2>
                <p className="text-[10px] text-[#14B8A6] font-bold uppercase tracking-widest mt-1">Study Planner</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="lg:hidden p-1 text-gray-400">
              <LiaTimesSolid size={24} />
            </button>
          </div>

          <nav className="p-4 space-y-2 mt-4">
            <NavItem to="/dashboard" icon={<FaHome size={20} />} label="Dashboard" onClick={() => setIsOpen(false)} end />
            <NavItem to="/dashboard/studyplan" icon={<FaBook size={20} />} label="Study Plan" onClick={() => setIsOpen(false)} />
            <NavItem to="/dashboard/aiassistant" icon={<FiMessageSquare size={20} />} label="AI Assistant" onClick={() => setIsOpen(false)} />
            <NavItem to="/dashboard/profile" icon={<FaRegUser size={20} />} label="Profile" onClick={() => setIsOpen(false)} />
          </nav>
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50/30">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 bg-gradient-to-br from-[#246690] to-[#14B8A6] rounded-xl flex items-center justify-center text-white font-bold shadow-sm overflow-hidden">
              {avatar ? (
                <img src={avatar} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <span>{profileName.charAt(0).toUpperCase()}</span>
              )}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-bold text-[#101828] truncate">{profileName}</span>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Free Plan</span>
            </div>
          </div>
          <button 
            onClick={() => setShowLogoutModal(true)}
            className="flex w-full items-center gap-3 px-4 py-3 rounded-2xl font-bold text-sm text-red-500 hover:bg-red-50 transition-all duration-200"
          >
            <FiLogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {showLogoutModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 bg-[#101828]/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl text-center">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <FiLogOut size={40} />
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-2 tracking-tight">Logging Out?</h2>
            <p className="text-gray-500 font-medium mb-10 leading-relaxed">
              Are you sure? Your data will be saved for your next session.
            </p>
            <div className="flex flex-col gap-3">
              <button 
                onClick={handleLogout}
                className="w-full py-4 bg-red-500 text-white rounded-[1.25rem] font-bold text-lg hover:bg-red-600 transition-all"
              >
                Yes, Log Out
              </button>
              <button 
                onClick={() => setShowLogoutModal(false)}
                className="w-full py-4 bg-gray-100 text-gray-600 rounded-[1.25rem] font-bold text-lg hover:bg-gray-200 transition-all"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const NavItem = ({ to, icon, label, onClick, end }) => (
  <NavLink
    to={to}
    end={end}
    onClick={onClick}
    className={({ isActive }) =>
      `group flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all duration-200 ${
        isActive 
          ? "bg-gradient-to-r from-[#246690] to-[#00BBA7] text-white shadow-md shadow-blue-900/10" 
          : "text-gray-500 hover:bg-gray-50 hover:text-[#246690]"
      }`
    }
  >
    <span className="transition-transform group-hover:scale-110">{icon}</span>
    {label}
  </NavLink>
);

export default SideBar;