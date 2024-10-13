import React from 'react'

const Widget = () => {
  return (
    <div className='flex items-center justify-between rounded-lg bg-white p-4 max-w-[280px] w-full min-h-[80px]' >
        <div className="flex flex-col">
            <span>51</span>
            <span>Total Channels</span>
        </div>

        <div className="flex p-3 rounded-3xl bg-[#E0FAF5]">
            <img src="/widget1.png" alt="Total Channels" className="h-[20px] w-[20px]" />
        </div>
    </div>
  )
}

export default Widget;


