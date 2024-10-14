import React, { ChangeEvent, useState } from 'react'
import Header from '../../components/Header';
import Input from '../../components/Input';
import {AuthButton} from '../../components/Button';

const SignIn = () => {

  const [isSignUp, setIsSignup] = useState(true);

  const switchMode = () => {
    setIsSignup(!isSignUp)
  }

  const initialState = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  }

  const [user, setUser] = useState(initialState);

  const handlechange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value})
  }


  return (
    <div className='flex flex-col gap-5 w-[400px]'>
      <Header text={isSignUp ? 'Register your account': 'Log in to your account'}/>

      <p className='text-[#5B6871] text-[15px] font-[400]'>Proceed to create account and setup your organization</p>

      {isSignUp &&
        <div className="flex flex-row gap-2">
          <Input half type='text' img='/user.png' onChange={handlechange} name='first_name' value={user.first_name} label='First Name' placeholder='First Name'/>
          <Input half type='text' img='/user.png' onChange={handlechange} name='last_name' value={user.last_name} label='Last Name' placeholder='Last Name'/>
        </div>
      }

      <Input type='email' img='/email2.png' onChange={handlechange} name='email' value={user.email} label='Work Email' placeholder='Work Email' isEmail/>
      <Input type='password' img='/lock.png' onChange={handlechange} name='password' value={user.password} label='Password' placeholder='Password' />

      <AuthButton onClick={() => {}} text={isSignUp ? 'Create account': 'Login'}/>

      <p className="text-[#5B6871] text-[13px] font-[400] mt-[24px]">
        By clicking the button above, you agree to our <span className='text-[#FF8600] '>Terms of Service</span> and <span className='text-[#FF8600] '>Privacy Policy.</span>
      </p>


      <div className="flex gap-2 mt-[32px]">
        <span className='text-[#5B6871] text-[14px]'>{isSignUp? 'Already have an account?': 'Don’t have an account?'}</span>
        <p className='text-[#FF8600] text-[14px] cursor-pointer' onClick={switchMode}>{isSignUp ? 'Login': 'Register'}</p>
      </div>
    </div>
  )
}

export default SignIn;


