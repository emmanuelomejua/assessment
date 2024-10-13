import React, { FC } from 'react';


interface IInput{
  label: string;
  img: string;
  half?: boolean;
  type: string;
  isActive?: boolean;
  isEmail?: boolean;
  placeholder: string;
}

const Input:FC<IInput> = ({half, label, img, type, isEmail, isActive, placeholder }) => {
  return (
    <div className={`flex flex-col gap-1 ${half ? 'w-1/2': 'w-full'}`}>
      { isActive &&
        <label htmlFor="" className='flex gap-2 items-center'>
        {label}
        { isEmail &&
          <img src="/vector.png" alt="" className="h-[15px]" />
        }
        </label>
      }

      <div className={`flex gap-3 items-center rounded-lg ${isActive ? 'border-[#FF8600] ': 'border-[#DDE2E4]'} border-[1px] p-4`}>
        <img src={img} alt="" className="h-[15px]" />
        <input type={type} className="outline-none" placeholder={placeholder}/>
        {/* <img src={img} alt="" className="h-[15px]" /> */}
      </div>
      { !half && isActive &&
        <div className="flex justify-between items-center">
          <div className=""></div>
          <span> 15/15</span>
        </div>
      }
    </div>
  )
}

export default Input;
