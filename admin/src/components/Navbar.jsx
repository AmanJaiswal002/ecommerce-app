import React from 'react'
import {assets} from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
        <div className='flex items-center gap-3'>
          <a href="https://ecommerce-admin-bg28.onrender.com/" target="_blank" rel="noopener noreferrer" className='border border-gray-600 text-gray-700 hover:bg-gray-100 px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium transition-colors'>Go to Store</a>
          <button onClick={()=>setToken('')} className='bg-gray-600 text-white px-5 py-2 sm:py-2 rounded-full text text-xs sm:text-sm hover:bg-gray-800 transition-colors'>Logout</button>
        </div>
    </div>
  )
}

export default Navbar