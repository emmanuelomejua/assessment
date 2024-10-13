import React from 'react';
import { Link } from 'react-router-dom';



const list = [
  {
    id: 0,
    name: 'My Portfolio',
    icon: '/account.png',
    url: '/'
  },
  {
    id: 0,
    name: 'My Group',
    icon: '/group.png',
    url: '#'
  },
  {
    id: 0,
    name: 'Messages',
    icon: '/messages.png',
    url: '/messages'
  },
  {
    id: 0,
    name: 'Analytics',
    icon: '/analytics.png',
    url: '#'
  },
  {
    id: 0,
    name: 'Pack',
    icon: '/pack.png',
    url: '#'
  },
  {
    id: 0,
    name: 'Setting',
    icon: '/settings.png',
    url: '#'
  },
]



const Sidebar = () => {
  return (
    <div className='flex flex-col bg-[#fff] w-[250px] py-4 gap-4'>
      <div className="flex flex-row gap-2 justify-center">
       <img src="/buddy.png" alt="" className="" />
       <span className='text-[#3B3B45] text-[24px] font-semibold'>Buddy</span>
      </div>

      { list.map((l) => (
        <Link to={l.url} key={l.id} className="flex flex-row items-center gap-1 my-2 cursor-pointer">
          <img src={l.icon} alt="" className="h-[18px] w-[18px]" />
          <span className='text-[#818187] text-[14px] font-[500]'>{l.name}</span>
        </Link>
      ))
      }

      <div className="mt-auto">
         Message
      </div>

    </div>
  )
}

export default Sidebar;


