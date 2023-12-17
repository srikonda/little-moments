import React from 'react'
import BusinessDetailsLeftSide from '@/layouts/AddPlace/BusinessDetails/BusinessDetailsLeftSide'
import RightSide from '@/layouts/Registration/RightSide'
import SocialLinksLeftSide from '@/layouts/AddPlace/SocialLinks/SocialLinksLeftSide'

const page = () => {
  return (
    <div className='grid grid-cols-12 w-full h-screen'>
        <SocialLinksLeftSide />
        <RightSide text="REGISTRATION FORM" />
    </div>
  )
}

export default page