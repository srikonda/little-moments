'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaHome, FaUser } from 'react-icons/fa'

type LeftSideNavbarProps = {
  props: boolean;
}

const LeftSideNavbar = ({props}: LeftSideNavbarProps) => {

  const [isLogin, setIsLogin] = useState<boolean>(props)
  const { push } = useRouter();

  const handleLogin = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    console.log(isLogin)
    if(!isLogin){
      push('/login/props')
    }else{
      push('/login')
    }
  }

  return (
    <>
        <div className='absolute top-0 left-2 text-xl cursor-pointer'>
              <Link href='/'> <FaHome /> </Link>
            </div>
            <div className='absolute top-0 right-2 text-xl cursor-pointer'>
            <div onClick={handleLogin}><FaUser /></div>
        </div>
    </>
  )
}

export default LeftSideNavbar