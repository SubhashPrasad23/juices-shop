import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import juices from "../assets/juices.png";

const Header = () => {
  return (
    <div className="  w-full  px-5 py-3 shadow-lg border-b-2 bg-gradient-to-t from-orange-400 to-yellow-200  sticky top-0">
      <div className="flex items-center justify-between">
        <div>
          <GiHamburgerMenu size={35} className="" />
        </div>
        <div className="">
          <img src={juices} alt="" className="h-16 w-16" />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
