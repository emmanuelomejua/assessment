import React, { FC, ChangeEventHandler, useState } from 'react';


interface IInput{
  label: string;
  img: string;
  half?: boolean;
  type: string;
  isActive?: boolean;
  isEmail?: boolean;
  placeholder: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  suffixIcon?: boolean;
  maxLength?: number;
  x?: number

}

const Input:FC<IInput> = ({half, label, img, type, isEmail, isActive, placeholder, name, value, onChange, suffixIcon, x }) => {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col gap-1 ${half ? 'w-[185px]': 'w-[380px]'}`}>
      { isActive &&
        <label htmlFor="" className='flex gap-2 items-center'>
        {label}
        { isEmail &&
          <img src="/vector.png" alt="" className="h-[15px]" />
        }
        </label>
      }

      <div className={`flex gap-3 items-center justify-between rounded-lg ${isActive ? 'border-[#FF8600] ': 'border-[#DDE2E4]'} border-[1px] p-2`}>
        <div className="flex gap-3 items-center">
          <img src={img} alt="" className="h-[15px]" />
          <input 
          type={showPassword ? "text" : type} 
          className={`outline-none ${half && 'max-w-[120px] w-[inherit]'}`} 
          placeholder={placeholder} 
          name={name} value={value} 
          maxLength={type === 'email' ? 60 : type === 'password' ? 15 : undefined}
          onChange={onChange} required/>
        </div>
        { suffixIcon && type === 'email' && (
          <span className='flex items-center justify-center cursor-pointer' >
            <img src='/okay.png' alt="" className="" />
          </span>
        )}
        { suffixIcon && type === 'password' && (
        <span className='flex items-center justify-center cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
          <img src={showPassword ? '/visiblity.png': '/visibilityoff.svg'} alt="" className="" />
        </span>
        )}

      </div>
      { !half && isActive &&
        <div className="flex justify-between items-center">
          <div className=""></div>
          <span className='text-[10px] text-[#84919A]'>
            {x} / {type === 'email' ? 60 : 15}
          </span>
        </div>
      }
    </div>
  )
}

export default Input;


