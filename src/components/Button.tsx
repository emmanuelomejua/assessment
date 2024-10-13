import React, { FC } from 'react';

type IButton = {
    url?: string;
    text: string;
}

const Button:FC<IButton> = ({text, url}) => {
  return (
    <div className='flex flex-row items-center justify-center p-4 rounded-xl gap-2 border-[#DDE2E4] border-[1px] cursor-pointer'>
        <img src={url} alt="" className="" />
        <span>{text}</span>
    </div>
  )
}



export default Button;

export const AuthButton:FC<IButton> = ({text, url}) => {
    return (
      <div className='flex flex-row items-center justify-center mt-[20px] p-4 rounded-xl gap-2 bg-[#ECEDED] border-[#DDE2E4] border-[1px] cursor-pointer'>
          <img src={url} alt="" className="" />
          <span className='text-[#C3C7CE] text-[14px] font-semibold'>{text}</span>
      </div>
    )
}


// background: #ECEDED
// background: 
