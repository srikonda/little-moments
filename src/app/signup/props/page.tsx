import React from 'react'
import RightSide from '@/layouts/Registration/RightSide'
import SignupPropsLeftSide from '@/layouts/Registration/Props/Signup/SignupPropsLeftSide'

const page = () => {
  return (
    <div className='grid grid-cols-12 w-full h-screen'>
        <SignupPropsLeftSide />
        <RightSide text='SIGN UP PROPS & GET STARTED' />
    </div>
  )
}

export default page