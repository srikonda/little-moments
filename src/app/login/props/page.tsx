import React from 'react'
import RightSide from '@/layouts/Registration/RightSide'
import LoginPropsLeftSide from '@/layouts/Registration/Props/Login/LoginPropsLeftSide'

const page = () => {
  return (
    <div className='grid grid-cols-12 w-full h-screen'>
        <LoginPropsLeftSide />
        <RightSide text='LOGIN PROPS & GET STARTED'/>
    </div>
  )
}

export default page