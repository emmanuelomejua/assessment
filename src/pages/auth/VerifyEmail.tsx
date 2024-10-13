import React, { useState } from 'react'
import Header from '../../components/Header';
import { PlainButton } from '../../components/Button';
import Info from '../../components/Info';
import OtpInput from '../../components/OtpInput';

const VerifyEmail = () => {

  const [isOtp, setIsOtp] = useState(false);

  const switchMode = () => {
    setIsOtp(!isOtp);
  }

  const verify = () => {

  }


  return (
    <div className={`flex ${!isOtp && 'items-center'} gap-4 flex-col bg-white shadow-2xl p-[24px] rounded-xl`}>
      { isOtp ?
      <>
        <Header text='Verify your email'/>

        <p className='text-[#5B6871] text-[15px]'>A four digit OTP code has been sent to your email <span className='text-[#FF8600]'>seyi@zojatech.com</span></p>

        <div className="flex w-full gap-6 my-3">
          <OtpInput/>
          <OtpInput/>
          <OtpInput/>
          <OtpInput/>
        </div>

        <PlainButton text='Continue' onClick={verify}/>

      </> :

      <>
        <img src="/vector1.png" alt="" className="h-[40px] mb-[30px]" />

        <Header text='Check your mailbox !'/>

        <p className='w-3/4 text-center text-[#5B6871] text-[14px]'>We’ve sent an email to seyi@zojatech.com with a an OTP to confirm your account. Check your inbox to  activate your account.</p>

        <PlainButton text='Confirm Email' onClick={switchMode}/>
      </>

      }

        <Info text1='Didn’t get the mail?' text2='Resend'/>
        
    </div>
  )
}

export default VerifyEmail;


