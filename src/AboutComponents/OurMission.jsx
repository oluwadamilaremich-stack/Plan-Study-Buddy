import React from 'react'
import Purp from '../assets/Purp.png'
import Stud from '../assets/Stud.png'
import Inn from '../assets/Inn.png'
import Inc from '../assets/Inc.png'
import Exc from '../assets/Exc.png'
import Glo from '../assets/Glo.png'

const OurMission = () => {
  return (
    <div className='bg-linear-to-b from-[#FFFFFF] to-[#F9FAFB] px-6 md:px-24 py-16 md:py-20'>
          <div className='flex items-center flex-col max-w-7xl mx-auto'>
            <h1 className='text-center font-bold text-3xl md:text-[48px] text-[#101828]'>Our Mission & Values</h1>
            <p className='text-center text-lg md:text-[20px] pt-4 text-[#4A5565]'>
                Everything we do is guided by our commitment to student success
            </p>
    
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-[64px] w-full'>
    
                <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
                    <img src={Purp} alt="" className='w-14 h-14' />
                    <p className='font-bold text-[#101828] text-[20px] mt-4'>Purpose-Driven</p>
                    <p className='text-[#4A5565] text-[16px] mt-3 leading-relaxed'>
                      We exist to reduce student stress and improve learning outcomes through intelligent technology.
                    </p>
                </div>
    
                <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
                    <img src={Stud} alt="" className='w-14 h-14' />
                    <p className='font-bold text-[#101828] text-[20px] mt-4'>Student-First</p>
                    <p className='text-[#4A5565] text-[16px] mt-3 leading-relaxed'>
                      Every feature, every decision starts with asking: 'How does this help students succeed?'
                    </p>
                </div>
    
                <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
                    <img src={Inn} alt="" className='w-14 h-14' />
                    <p className='font-bold text-[#101828] text-[20px] mt-4'>Innovation</p>
                    <p className='text-[#4A5565] text-[16px] mt-3 leading-relaxed'>
                      We constantly push boundaries, applying the latest AI research to solve real learning challenges.
                    </p>
                </div>
    
                <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
                    <img src={Inc} alt="" className='w-14 h-14' />
                    <p className='font-bold text-[#101828] text-[20px] mt-4'>Inclusivity</p>
                    <p className='text-[#4A5565] text-[16px] mt-3 leading-relaxed'>
                      Learning is for everyone. We design for diverse needs, backgrounds, and learning styles.
                    </p>
                </div>

                <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
                    <img src={Exc} alt="" className='w-14 h-14' />
                    <p className='font-bold text-[#101828] text-[20px] mt-4'>Excellence</p>
                    <p className='text-[#4A5565] text-[16px] mt-3 leading-relaxed'>
                      We hold ourselves to the highest standards in product quality, support, and user experience.
                    </p>
                </div>

                <div className='flex flex-col bg-white shadow-md p-6.5 rounded-2xl border border-gray-50'>
                    <img src={Glo} alt="" className='w-14 h-14' />
                    <p className='font-bold text-[#101828] text-[20px] mt-4'>Global Impact</p>
                    <p className='text-[#4A5565] text-[16px] mt-3 leading-relaxed'>
                      We dream of a world where every student has access to personalized, effective study tools.
                    </p>
                </div>
                
            </div>
          </div>
        </div>
  )
}

export default OurMission
