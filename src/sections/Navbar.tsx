import React from 'react';

type ITitle = {
    title: string;
}

const Navbar = ({title}:ITitle) => {
  return (
    <div className='flex justify-between items-center gap-5 py-6 px-4'>
        <h2 className='text-[24px] font-bold leading-4 text-[#3B3B45]'>{title}</h2>

        <div className="flex items-center gap-2">
            <div className="flex items-center mx-4 rounded-[16px] bg-white p-3 gap-1 w-[400px]">
                <img src="/search.png" alt="Search" className="text-[#000F29] h-[13px] w-[13px]" />
                <input type="text" className="outline-none font-[600] text-[13px] ml-2 w-full" placeholder='Search'/>
            </div>
        
            <div className="flex items-center justify-center bg-white rounded-3xl h-[50px] w-[50px] cursor-pointer">
                <img src="/add.png" alt="" className="h-[20px] w-[20px]" />
            </div>
        
            <div className="flex items-center justify-center bg-white rounded-3xl h-[50px] w-[50px] cursor-pointer relative">
                <img src="/not.png" alt="" className="h-[20px] w-[20px]" />
                <div className='bg-red-600 p-1 rounded absolute top-4 right-[13px]'/>
            </div>
        </div>

    </div>
  )
}

export default Navbar;
