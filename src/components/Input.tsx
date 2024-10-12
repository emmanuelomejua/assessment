import React from 'react';


interface IInput{
  label: string;
  img: string;
  half?: string;
  type: string | number
}

const Input = () => {
  return (
    <div className='flex flex-col gap-1 w-full'>
      <label htmlFor="">First Name</label>
      <div className="flex gap-3 rounded-lg border-[#DDE2E4] border-[1px] p-4 max-w-[389px]">
        <img src="/user.png" alt="" className="" />
        <input type="text" className="outline-none" placeholder='First Name'/>
      </div>
        <span className="flex justify-self-end">
          15/15
        </span>
    </div>
  )
}

export default Input;
