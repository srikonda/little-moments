import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const RightSide: React.FC = () => {
  return (
    <div className="hidden md:flex gap-2 sm:gap-4 md:gap-8 lg:gap-16 w-full justify-end items-center">
      <div className="cursor-pointer">
        Add a Place
      </div>
      <div className="cursor-pointer">
        Download App
      </div>
      <Link href='/login' className="flex items-center gap-2 py-4 px-2 sm:px-4 md:px-8 lg:px-12 bg-primary text-background cursor-pointer hover:opacity-80">
        <div>Login</div>
        <div>
          <FaArrowRightLong />
        </div>
      </Link>
    </div>
  );
};

export default RightSide;
