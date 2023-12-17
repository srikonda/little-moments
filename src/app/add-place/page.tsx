import PlaceOwnerLeftSide from '@/layouts/AddPlace/PlaceOwner/PlaceOwnerLeftSide'
import RightSide from '@/layouts/Registration/RightSide'
import React from 'react'

const page = () => {
  return (
    <div className='grid grid-cols-12 w-full h-screen'>
        <PlaceOwnerLeftSide />
        <RightSide text="REGISTRATION FORM" />
    </div>
  )
}

export default page