import React from 'react'
import RightSide from '@/layouts/Registration/RightSide'
import InformationLeftSide from '@/layouts/AddPlace/Information/InformationLeftSide'

const page = () => {
  return (
    <div className='grid grid-cols-12 w-full h-screen'>
        <InformationLeftSide />
        <RightSide text="REGISTRATION FORM" />
    </div>
  )
}

export default page