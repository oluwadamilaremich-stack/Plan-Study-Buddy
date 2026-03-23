import React from 'react'
import { Outlet } from 'react-router-dom';
import ProfImg from "../../assets/ProfileSetup.png";

const ProfSetupLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-[580px_1fr] bg-white">
        
      <div className="hidden md:block sticky top-0 h-screen overflow-hidden">
        <img 
          src={ProfImg} 
          alt="Profile Setup Background"  
          className='h-full w-full object-cover animate-in fade-in duration-1000'
        />
      </div>

      <main className="flex flex-col items-start justify-start px-6 md:pl-12 lg:pl-20 pr-6">
        
        <div className="w-full max-w-2xl">
          <Outlet />
        </div>
        
      </main>
    </div>
  )
}

export default ProfSetupLayout