import LoginLeftSide from '@/layouts/Registration/Login/LoginLeftSide'
import RightSide from '@/layouts/Registration/RightSide'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-12 w-full h-screen'>
        <LoginLeftSide />
        <RightSide text='LOGIN & GET STARTED' />
    </div>
  )
}

export default page