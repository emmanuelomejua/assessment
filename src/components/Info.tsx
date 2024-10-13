import React, { FC } from 'react';

type IInfo = {
    text1: string;
    text2: string;
}

const Info:FC<IInfo> = ({text1, text2}) => {
  return (
    <div className="flex gap-2 mt-[32px]">
        <span className='text-[#5B6871] text-[14px]'>{text1}</span>
        <p className='text-[#FF8600] text-[14px] cursor-pointer'>{text2}</p>
    </div>
  )
}

export default Info;


// Didn’t get the mail?