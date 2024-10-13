import React from 'react';
import { Link, useLocation } from 'react-router-dom';



const list = [
  {
    id: 0,
    name: 'My Portfolio',
    icon: '/account.png',
    url: '/'
  },
  {
    id: 1,
    name: 'My Group',
    icon: '/group.png',
    url: '#'
  },
  {
    id: 2,
    name: 'Messages',
    icon: '/messages.png',
    url: '/messages'
  },
  {
    id: 3,
    name: 'Analytics',
    icon: '/analytics.png',
    url: '#'
  },
  {
    id: 4,
    name: 'Pack',
    icon: '/pack.png',
    url: '#'
  },
  {
    id: 5,
    name: 'Settings',
    icon: '/settings.png',
    url: '#'
  },
]



const Sidebar = () => {

  const location = useLocation();

  return (
    <div className="flex flex-col bg-[#fff] w-[250px] py-6 px-4 shadow-md gap-4">
      

    <div className="flex items-center justify-center mb-8">
      <img src="/buddy.png" alt="Buddy Logo" className="h-[40px]" />
      <span className="text-[#3B3B45] text-[24px] font-bold ml-2">Buddy</span>
    </div>
    

    <div className="flex flex-col gap-4">
      {list.map((item) => (
        <Link 
          to={item.url} 
          key={item.id}
          className={`flex items-center gap-3 p-3 rounded-md text-sm font-[500] transition-all duration-300
          ${location.pathname === item.url ? 'text-[#FF8600] bg-white shadow-lg' : 'text-[#818187] hover:bg-gray-100'}`}
        >
          <img src={item.icon} alt={item.name} className="h-[18px] w-[18px]" />
          <span>{item.name}</span>
        </Link>
      ))}
    </div>
    

    <div className="mt-auto flex flex-col items-center gap-4 rounded-xl shadow-lg p-[24px] relative">
      <img 
          src="/ellipse1.png" 
          alt="Theresa Milly" 
          className="h-[40px] w-[40px] rounded-full absolute right-0 left-[40%] top-[-15px]"
        />
        <div className="flex flex-col mt-[20px]">
          <span className="text-[#3B3B45] text-sm font-semibold">Theresa Milly</span>
          <span className="text-[#818187] text-xs text-center">Influencer</span>
        </div>

        <div className="flex flex-row bg-[#ff88006a] text-[#FF8600] cursor-pointer w-full gap-2 items-center justify-center p-3 rounded-lg ">
          <img src="/exit.png" alt="" className="h-[15px] w-[12px]" />
          <button className="font-[500] text-sm">Logout</button>
        </div>
      </div>
  </div>
  )
}

export default Sidebar;


