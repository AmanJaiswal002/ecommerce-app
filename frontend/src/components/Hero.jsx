import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400'>

      {/* Hero Left Side */}
      <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>

        <div className='text-[#414141]'>

          <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>

            <p className='font-medium text-sm md:text-base'>
              OUR BESTSELLERS
            </p>
          </div>

          <h1 className= 'prata-regular text-3xl sm:text-4xl lg:text-5xl font-semibold mt-4'>
            Latest Arrivals
          </h1>

          <div className='flex items-center gap-2 mt-6'>
            <p className='text-sm font-medium'>
              SHOP NOW
            </p>

            <p className='w-8 h-[1px] bg-[#414141]'></p>
          </div>

        </div>

      </div>

      {/* Hero Right Side */}
      <div className='w-full sm:w-1/2'>
        <img
          src={assets.hero_img}
          className='w-full h-full object-cover'
          alt='Hero'
        />
      </div>

    </div>
  )
}

export default Hero 