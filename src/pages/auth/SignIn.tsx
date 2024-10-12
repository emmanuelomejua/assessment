import React from 'react'
import Header from '../../components/Header';
import Input from '../../components/Input';

const SignIn = () => {
  return (
    <div className='flex flex-col gap-5'>
      <Header text='Register your account'/>

      <p className='text-[#5B6871] text-[13px] font-[400]'>Proceed to create account and setup your organization</p>

      <div className="flex flex-row gap-2">
        <Input/>
        <Input/>
      </div>

      <Input/>
      <Input/>

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

export default SignIn;

// background: #5B6871
