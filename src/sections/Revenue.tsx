import React from 'react';
import H1 from '../components/H1';

const revenues = [
    {
        id: 0,
        bg: '#1773EA14',
        icon: '/facebook.png',
        price: '$4,000',
        desc: 'Recently Added Pages'
    },
    {
        id: 1,
        bg: '#EB334814',
        icon: '/ig.png',
        price: '$2,120',
        desc: 'Video Monetization'
    },
    {
        id: 2,
        bg: '#2764AC14',
        icon: 'linkedin.png',
        price: '$1,752',
        desc: 'Community Buildup'
    },
]


const Revenue = () => {
  return (
    <div className='bg-white rounded-lg flex flex-col p-4 gap-3 w-full'>
        <H1 text='Revenue'/>

    { revenues.map((revenue) => (
        <div className="flex items-center justify-between rounded-lg bg-white p-2 max-w-[280px] border-[1px] w-full min-h-[70px]" key={revenue.id}>
            <div className="flex flex-col">
                <span className='text-[#3B3B45] text-xl font-bold'>{revenue.price}</span>
                <span className='text-[#A3A3A6] text-xs leading-3'>{revenue.desc}</span>
            </div>

            <div className='flex p-3 rounded-3xl' style={{backgroundColor: `${revenue.bg}`}}>
                <img src={revenue.icon} alt="Total Channels" className="h-[16px] w-[16px]" />
            </div>
        </div>
    ))
    }
    </div>
  )
}

export default Revenue;
