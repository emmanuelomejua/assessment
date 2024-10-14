import React from 'react';
import H1 from '../components/H1';


const news = [
    {
        id: 0,
        title: 'Russia & Ukraine War',
        desc: "Marketing is evolving. It's chang..."
    },
    {
        id: 1,
        title: 'Elon Musk bought Twitter',
        desc: 'Twitter is the most useful social pl...'
    },
    {
        id: 3,
        title: 'Fuel Crisis Everywhere',
        desc: 'Twitter is the most useful social pl...'
    },
]

const News = () => {
  return (
    <div className='bg-white rounded-lg flex flex-col p-4 gap-3 w-full'>
        <H1 text='Trending News'/>

        <div className="flex items-center rounded-lg bg-white p-2 max-w-[280px] gap-1 border-[1px] w-full max-h-[72px]">
            <img src="/news1.png" alt="" className="h-[48px] w-[48px] rounded-[12px]" />

            <div className="flex flex-col ">
                <h2 className='text-[#3B3B45] text-[14px] leading-[17.5px] font-semibold'>Russia & Ukraine War</h2>
                <p className='text-[#818187] text-[12px] font-[300]'>Marketing is evolving. It's chang...</p>
            </div>
        </div>
    </div>
  )
}

export default News;


