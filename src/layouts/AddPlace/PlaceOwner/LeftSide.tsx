import React from 'react'
import Title from '@/components/Registration/Title'
import LoginForm from '@/components/Forms/LoginForm'
import LeftSideNavbar from '../LeftSideNavbar';

const LeftSide = () => {
  return (
    <div className='registration-left'>
            <LeftSideNavbar />
            <div className="registration-form">
              <Title text='LOGIN' />
              <LoginForm />
            </div>
    </div>
  )
}

export default LeftSide