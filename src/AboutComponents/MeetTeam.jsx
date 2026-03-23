import React from 'react'
import SSS from '../assets/SSS.png'

const MeetTeam = () => {
  return (
    <div className='bg-white px-6 md:px-24 py-16 md:py-20'>
              <div className='flex items-center flex-col max-w-7xl mx-auto'>
                <h1 className='text-center font-bold text-3xl md:text-[48px] text-[#101828]'>Our Mission & Values</h1>
                <p className='text-center text-lg md:text-[20px] pt-4 text-[#4A5565]'>
                    Everything we do is guided by our commitment to student success
                </p>
        
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-[64px] w-full'>
        
                    <div className='flex flex-col bg-white shadow-md p-6 rounded-2xl border border-gray-50'>
                        <div className='flex flex-col items-center gap-3'>
                            <img src={SSS} alt="" className='w-14 h-14' />
                            <div>
                                <p className='font-bold text-center text-base text-[#101828]'>Dr. Anon Chen</p>
                                <p className='text-sm font-semibold text-center text-[#3B82CD]'>Co-Founder & CEO</p>
                            </div>
                        </div>
                    
                        <p className='text-base text-[#4A5565] text-center mt-4'>Former neuroscience researcher with a passion for applying cognitive science to education.</p>
                    </div>
        
                    <div className='flex flex-col bg-white shadow-md p-6 rounded-2xl border border-gray-50'>
                        <div className='flex flex-col items-center gap-3'>
                            <img src={SSS} alt="" className='w-14 h-14' />
                            <div>
                                <p className='font-bold text-center text-base text-[#101828]'>Jordan Matthews</p>
                                <p className='text-sm font-semibold text-center text-[#3B82CD]'>Co-Founder & CTO</p>
                            </div>
                        </div>
                    
                        <p className='text-base text-[#4A5565] text-center mt-4'>AI/ML expert who previously led engineering teams at top tech companies.</p>
                    </div>
        
                    <div className='flex flex-col bg-white shadow-md p-6 rounded-2xl border border-gray-50'>
                        <div className='flex flex-col items-center gap-3'>
                            <img src={SSS} alt="" className='w-14 h-14' />
                            <div>
                                <p className='font-bold text-center text-base text-[#101828]'>Priya Patel</p>
                                <p className='text-sm font-semibold text-center text-[#3B82CD]'>Head of Product</p>
                            </div>
                        </div>
                    
                        <p className='text-base text-[#4A5565] text-center mt-4'>Education technology veteran dedicated to creating intuitive, impactful learning tools.</p>
                    </div>
        
                    <div className='flex flex-col bg-white shadow-md p-6 rounded-2xl border border-gray-50'>
                        <div className='flex flex-col items-center gap-3'>
                            <img src={SSS} alt="" className='w-14 h-14' />
                            <div>
                                <p className='font-bold text-center text-base text-[#101828]'>Marcus Williams</p>
                                <p className='text-sm font-semibold text-center text-[#3B82CD]'>Lead AI Researcher</p>
                            </div>
                        </div>
                    
                        <p className='text-base text-[#4A5565] text-center mt-4'>PhD in Machine Learning, focused on adaptive algorithms and personalization.</p>
                    </div>
    
                    <div className='flex flex-col bg-white shadow-md p-6 rounded-2xl border border-gray-50'>
                        <div className='flex flex-col items-center gap-3'>
                            <img src={SSS} alt="" className='w-14 h-14' />
                            <div>
                                <p className='font-bold text-center text-base text-[#101828]'>Sofia Rodriguez</p>
                                <p className='text-sm font-semibold text-center text-[#3B82CD]'>Head of Design</p>
                            </div>
                        </div>
                    
                        <p className='text-base text-[#4A5565] text-center mt-4'>Award-winning designer committed to creating beautiful, accessible user experiences.</p>
                    </div>
    
                    <div className='flex flex-col bg-white shadow-md p-6 rounded-2xl border border-gray-50'>
                        <div className='flex flex-col items-center gap-3'>
                            <img src={SSS} alt="" className='w-14 h-14' />
                            <div>
                                <p className='font-bold text-center text-base text-[#101828]'>David Kim</p>
                                <p className='text-sm font-semibold text-center text-[#3B82CD]'>Head of Growth</p>
                            </div>
                        </div>
                    
                        <p className='text-base text-[#4A5565] text-center mt-4'>Former educator turned growth strategist, connecting students with better tools.</p>
                    </div>
                    
                </div>
              </div>
            </div>
  )
}

export default MeetTeam
