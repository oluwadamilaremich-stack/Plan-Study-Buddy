import React from 'react'

const Subscription = () => {
  return (
    <div>
      <div className="px-6 md:px-24 w-full mb-[79.98px] mt-[79.98px]">
            <div className='bg-linear-to-b from-[#3B82CD] to-[#14B8A6] flex flex-col items-center p-8 md:p-16 rounded-3xl mt-16 mx-auto max-w-6xl text-center'>
                <h3 className='font-bold text-3xl md:text-5xl text-white'>
                    Never Miss an Update
                </h3>
                <p className='text-lg md:text-xl text-center mt-4 text-white/90'>
                    Get the latest study tips, learning science insights, and product updates delivered <br />to your inbox
                </p>

                <div className='flex flex-col sm:flex-row gap-4 mt-8'>

                    <input className='font-semibold text-[#6A7282] bg-white/20 border-white/40 border-2 w-[301.66px] rounded-xl px-8 py-4 hover:bg-white/30 transition' placeholder='Enter your email'>
                        
                    </input>

                    <button className='cursor-pointer font-semibold text-[#3B82CD] px-8 py-4 bg-white shadow-md rounded-xl hover:bg-gray-50 transition'>
                        Subscribe
                    </button>
                    
                </div>

                <p className='text-white/80 text-sm mt-6'>Join 10,000+ students already subscribed</p>
            </div>
        </div>
    </div>
  )
}

export default Subscription
