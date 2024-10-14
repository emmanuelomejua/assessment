import React from 'react';
import share from '../assests/share.png';
import comment from '../assests/comment.png';
import love from '../assests/love.jpeg'


const lists = [
    {
        id: 0,
        title: '8 Upcoming Influencer Marketing Trends and Benefits',
        desc: "Marketing is evolving. It's changing from a one-way street to a two-way conversa…",

    },
    {
        id: 1,
        title: 'How Influencer Marketing Affects Consumer Buying Behavior',
        desc: 'As influencer marketing continues to grow, consumers have been turning to their…',

    },
]


var lists2 = [
    {
        id: 0,
        icon: love,
        num: 260
    },
    {
        id: 1,
        icon: comment,
        num: 123
    },
    {
        id: 2,
        icon: share,
        num: 234
    },
]


const Posts = () => {
  return (
    <div className='bg-white rounded-[16px] flex flex-col p-4 gap-3'>
        <h1 className='text-[#3B3B45] font-bold text-xl'>Trending Posts</h1>
       
       <div className="flex flex-row gap-3 items-center">
       { lists.map((l) => (
        <div className="bg-white rounded-lg flex flex-col p-4 border-[1px] gap-3" key={l.id}>
            <h2 className='text-[#3B3B45] font-bold text-xl leading-6'>{l.title}</h2>
            <p className='text-[#818187] text-sm font-[300] leading-5'>{l.desc}</p>

            <div className="flex flex-row items-center gap-3">
                { lists2.map(i => (
                    <div className="flex flex-row items-center rounded-xl bg-[#F6F6F6] px-[10px] py-1 gap-2">
                        <img src={i.icon} alt="" className="h-4 w-4" />
                        <span className='text-[#3B3B45] text-sm font-semibold'>{i.num}</span>
                    </div>
                ))
                }
            </div>
        </div>
       ))
}
       </div>
    </div>
  )
}

export default Posts;
