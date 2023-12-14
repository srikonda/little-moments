import React from 'react'
import SignupLeftSide from '@/layouts/Registration/Signup/SignupLeftSide'
import SignupProvider from '@/services/Context/SignupContext'
import RightSide from '@/layouts/Registration/RightSide'

const page = () => {
  return (
    <SignupProvider>
    <div className='grid grid-cols-12 w-full h-screen'>
        <SignupLeftSide />
        <RightSide text='SIGN UP & GET STARTED' />
    </div>
    </SignupProvider>
  )
}

export default page