import React, { FC } from 'react'

type IText = {
    text: string;
}

const Header:FC<IText> = ({text}) => {
  return (
    <h2 className='text-[#1D1D18] text-[24px] font-bold '>{text}</h2>
  )
}

export default Header;

// background: #1D1D18
