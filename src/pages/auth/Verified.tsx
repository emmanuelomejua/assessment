import React from 'react'
import Header from '../../components/Header';
import { PlainButton } from '../../components/Button';

const Verified = () => {
  return (
    <div className='flex items-center gap-5 flex-col bg-white shadow-2xl p-[24px] rounded-xl'> 
      
      <img src="/verified.png" alt="" className="h-[45px] mt-3" />

      <Header text='Email verified !'/>

      <p className='text-center font-[500] text-[#5B6871] text-[13px]'>The verified email address will be associated with your account. Click on the button below to continue</p>

      <PlainButton onClick={() => {}} text='Continue'/>

    </div>
  )
}

export default Verified;


