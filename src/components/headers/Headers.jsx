import React from "react";
import searchlogo from '../../images/search.svg'

const Navbar = () => {
  return (
  <div className="bg-[#1D2123] w-full h-20 flex items-center">
    <img src={searchlogo} alt="navlogo" className="pl-8 " />
  <input type="text" placeholder="Search" className="bg-inherit w-3/4 ml-8 white-[#FFFFFF40] opacity-75 " />
  </div>);
};

export default Navbar;
