'use client'

import React, { useContext } from 'react'
import Title from '@/components/Registration/Title'
import SignupForm from '@/components/Forms/SignupForm'
import { SignupContext, SignupContextProps } from '@/services/Context/SignupContext'
import SignupOtpForm from '@/components/Forms/SignupOtpForm'
import LeftSideNavbar from '../LeftSideNavbar'


const LeftSide = () => {
  const { isSignup } = (useContext(SignupContext) as SignupContextProps);
  return (
      <div className='registration-left'>
          <LeftSideNavbar props={false} />
          <div className="registration-form">
            <Title text='Sign Up' />
            {
              isSignup ? <SignupForm /> : <SignupOtpForm />
            }
            
          </div>
      </div>
  )
}

export default LeftSide