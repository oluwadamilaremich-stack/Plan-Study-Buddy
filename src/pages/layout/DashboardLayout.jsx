import React, { useState } from 'react';
import { Outlet, Navigate } from "react-router-dom";
import SideBar from '../../components/SideBar';
import { Menu } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import PlanImg from "../../assets/PlanImg.png"; 

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex h-screen text-geist overflow-hidden bg-[#EFF2F9]">
      
        <SideBar isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />

        <div className="flex-1 flex flex-col min-w-0 h-full">
            
            <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-sm z-50">
            
                <div className="flex items-center gap-3">
                    <img src={PlanImg} alt="Logo" className="w-8 h-8 object-contain"/>
                    
                    <div className="flex flex-col">
                        <h2 className="font-bold text-lg leading-none text-[#101828]">Plan</h2>
                        <p className="text-[10px] text-[#14B8A6] font-black uppercase tracking-widest mt-1">
                            Study Planner
                        </p>
                    </div>
                </div>

                <button 
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="p-2 text-gray-600 hover:bg-gray-100 rounded-xl transition-colors"
                >
                    <Menu size={24} />
                </button>
            </div>

            <main className="flex-1 overflow-y-auto overflow-x-hidden relative">
                <Outlet />
            </main>
        </div>
    </div>
  );
};

export default DashboardLayout;