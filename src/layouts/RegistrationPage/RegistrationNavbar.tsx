"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import React, { useState } from "react"
import { FaHome, FaUser } from "react-icons/fa"
import { Tooltip } from "react-tooltip"

type RegistrationNavbarProps = {
  props: boolean
}

const RegistrationNavbar = ({ props }: RegistrationNavbarProps) => {
  const [isLogin, setIsLogin] = useState<boolean>(props)
  const { push } = useRouter()

  const handleLogin = () => {
    setIsLogin(prevIsLogin => !prevIsLogin)
    console.log(isLogin)
    if (!isLogin) {
      push("/login/props")
    } else {
      push("/login")
    }
  }

  return (
    <>
      <Tooltip className="z-10" anchorSelect="#user-tooltip" place="bottom">
        User Login
      </Tooltip>
      <Tooltip className="z-10" anchorSelect="#props-tooltip" place="bottom">
        Props Login
      </Tooltip>
      <Tooltip className="z-10" anchorSelect="#home-tooltip" place="bottom">
        Home
      </Tooltip>
      <div id="home-tooltip" className="absolute top-0 left-2 text-xl cursor-pointer">
        <Link href="/">
          {" "}
          <FaHome />{" "}
        </Link>
      </div>
      <div
        id={isLogin ? "user-tooltip" : "props-tooltip"}
        className="absolute top-0 right-2 text-xl cursor-pointer"
      >
        <div onClick={handleLogin}>
          <FaUser />
        </div>
      </div>
    </>
  )
}

export default RegistrationNavbar
