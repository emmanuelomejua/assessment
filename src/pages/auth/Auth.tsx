import React from 'react';
import Header from '../../components/Header';
import Button from '../../components/Button';

const Auth = () => {
  return (
    <div className='bg-[#fff] shadow-white rounded-[8px] flex flex-col gap-5 p-[50px]' >
      <Header text='Register your account'/>
      <Button text='Sign up with email' url='/email.png' />

      <div className="flex flex-row text-[#DDE2E4] w-full items-center gap-2">
        <hr className='w-full'/>
        <p>or</p>
        <hr className='w-full'/>
      </div>

      <Button text='Sign up with google' url='/google.png' />


      <p className="text-[#5B6871] text-[16px] font-[400] mt-[24px]">
        By clicking the button above, you agree to our <span className='text-[#FF8600] '>Terms of Service</span> and <span className='text-[#FF8600] '>Privacy Policy.</span>
      </p>

      <div className="flex gap-2 mt-[32px]">
        <span className='text-[#5B6871] text-[14px]'>Already have an account?</span>
        <p className='text-[#FF8600] text-[14px] cursor-pointer'>Login</p>
      </div>

    </div>
  )
}

export default Auth;
