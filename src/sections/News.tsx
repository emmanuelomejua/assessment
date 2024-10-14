import React from 'react';
import H1 from '../components/H1';


const news = [
    {
        id: 0,
        title: 'Russia & Ukraine War',
        desc: "Marketing is evolving. It's chang...",
        img: '/news1.png'
    },
    {
        id: 1,
        title: 'Elon Musk bought Twitter',
        desc: 'Twitter is the most useful social pl...',
        img: '/news2.png'
    },
    {
        id: 3,
        title: 'Fuel Crisis Everywhere',
        desc: 'Twitter is the most useful social pl...',
        img: '/news3.png'
    },
]

const News = () => {
  return (
    <div className='bg-white rounded-[16px] flex flex-col p-4 gap-3 w-full'>
        <H1 text='Trending News'/>
        { news.map((n) => (
            <div className="flex items-center rounded-lg bg-white p-2 max-w-[280px] gap-1 border-[1px] w-full max-h-[72px]" key={n.id}>
                <img src={n.img} alt="" className="h-[48px] w-[48px] rounded-[12px]" />

                <div className="flex flex-col ">
                    <strong className='text-[#3B3B45] text-[12px] leading-[17.5px] font-semibold'>{n.title}</strong>
                    <p className='text-[#818187] text-[12px] font-[300]'>{n.desc}</p>
                </div>
            </div>
        ))

        }
    </div>
  )
}

export default News;


