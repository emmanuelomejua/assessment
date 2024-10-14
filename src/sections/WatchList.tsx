import React from 'react'
import H1 from '../components/H1';

const WatchList = () => {
  return (
    <div className='bg-white rounded-lg flex flex-col p-4 gap-3 w-full'>
        <div className="flex justify-between items-center">
            <H1 text='Watchlist'/>
            <span className='text-[#FF8600] text-[12px] leading-[15px] uppercase font-semibold cursor-pointer'>View All</span>
        </div>

        <div className="bg-[#F6F6F6] rounded-[12px] py-3 px-4 flex justify-between w-full">
            <div className="flex flex-col ">
                <span className='flex justify-center items-center gap-5 my-2'>
                    <strong className='text-[#3B3B45] text-[18px] font-semibold leading-[22.5px]'>AAPL</strong>
                    <img src="/uparrow.png" alt="" className="" />
                </span>
                <span className='text-[#A3A3A6] text-[15px] leading-[22.4px] font-[500]'>$142.90</span>
                <span className='text-[#00A441] text-[12px] font-[500] leading-[18px]'>+0.47%</span>
            </div>

            <div className=""></div>
        </div>

        <div className="bg-[#F6F6F6] rounded-[12px] py-3 px-4 flex justify-between w-full">
            <div className="flex flex-col ">
                <span className='flex justify-center items-center gap-5 my-2'>
                    <strong className='text-[#3B3B45] text-[18px] font-semibold leading-[22.5px]'>AAPL</strong>
                    <img src="/uparrow.png" alt="" className="" />
                </span>
                <span className='text-[#A3A3A6] text-[15px] leading-[22.4px] font-[500]'>$142.90</span>
                <span className='text-[#00A441] text-[12px] font-[500] leading-[18px]'>+0.47%</span>
            </div>

            <div className=""></div>
        </div>
    </div>
  )
}

export default WatchList;


// background: #3B3B45
// background: #A3A3A6
// background: #00A441
