import React from 'react'
import { Outlet, Navigate } from 'react-router'
import { useAuth } from '../../context/AuthContext';
import SignLog from "../../assets/Sign&Log.png";

const AuthLayout = () => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2">
        <img src={SignLog} alt=""  className='hidden md:block h-full w-full object-cover'/>
        <Outlet />    
    </div>
  )
}

export default AuthLayout
