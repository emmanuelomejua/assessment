import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center gap-5 py-6 px-4'>
        <h2 className='text-[24px] font-bold leading-4 text-[#3B3B45]' >My Portfolio</h2>

        <div className="flex items-center gap-2">
            <div className="flex items-center mx-4 rounded-[16px] bg-white py-2 px-4 gap-1">
                <img src="/search.png" alt="Search" className="text-[#000F29]" />
                <input type="text" className="outline-none" placeholder='Search'/>
            </div>
        
            <div className="flex items-center justify-center bg-white rounded-3xl p-3 cursor-pointer">
                <img src="/add.png" alt="" className="h-[20px] w-[20px]" />
            </div>
        
            <div className="flex items-center justify-center bg-white rounded-3xl p-3 cursor-pointer relative">
                <img src="/not.png" alt="" className="h-[20px] w-[20px]" />
                <div className='bg-red-600 p-1 rounded absolute top-3 right-[14px]'/>
            </div>
        </div>

    </div>
  )
}

export default Navbar;
