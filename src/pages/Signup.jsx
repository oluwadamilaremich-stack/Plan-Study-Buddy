import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { FiEye, FiEyeOff } from "react-icons/fi"; // Imported eye icons

const Signup = () => {
  return (
    <>
      <SignupForm />
    </>
  );
};

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State for toggle
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!name.trim()) {
      return setError('Please enter your full name');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password, name); 
      navigate('/accountsetup');
    } catch (err) {
      setError('Failed to create an account: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100 animate-in fade-in zoom-in duration-500">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#101828]">Create Account</h2>
          <p className="text-gray-500 mt-2">Please enter your details to sign up.</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl relative mb-6 text-sm font-medium animate-shake" role="alert">
            {error}
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Nimah Heis"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#3B82CD] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#3B82CD] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Password with Toggle */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-[#3B82CD] focus:border-transparent outline-none transition-all placeholder:text-gray-400 pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#3B82CD] transition-colors focus:outline-none"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
          </div>

          <button 
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center bg-gradient-to-r from-[#3B82CD] to-[#14B8A6] text-white py-4 rounded-xl font-bold shadow-lg hover:opacity-95 hover:shadow-xl transition-all active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </span>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-10 font-medium">
          Already have an account?{' '}
          <Link to="/login" className="font-bold text-[#3B82CD] hover:text-[#2d629a] transition-colors">
            Login for free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;