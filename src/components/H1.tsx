import React, { FC } from 'react';


type Ih1 = {
    text: string;
}

const H1:FC<Ih1> = ({text}) => {
  return (
    <h1 className='text-[20px] leading-[26px] font-bold text-[#3B3B45]'>{text}</h1>
  )
}

export default H1;


// background: #3B3B45
