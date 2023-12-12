import LeftSide from "@/components/Navbar/LeftSide";
import RightSide from "@/components/Navbar/RightSide";
import React from "react";

const Navbar = () => {
  return (
    <div className="top-0 left-0 right-0 fixed z-30 bg-background">
      <nav className="mt-2  bg-background flex justify-between items-center  border-y-2 border-primary">
        <LeftSide />
        <RightSide />
      </nav>
    </div>
  );
};

export default Navbar;
