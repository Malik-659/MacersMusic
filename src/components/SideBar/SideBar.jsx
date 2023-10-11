import React from "react";
import logo from "../../images/logo.svg";
import {GoHomeFill } from "react-icons/go";
import {BiSolidPlaylist,BiSearch} from 'react-icons/bi'
import {FaRadio} from 'react-icons/fa6'
import {IoMdAddCircle} from 'react-icons/io'
import { useNavigate } from "react-router-dom";
import {IoLogOut} from 'react-icons/io5'
import {BsPersonFill} from 'react-icons/bs'


const SideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="fixed pl-3 pt-8 pb-8 flex items-center bg-[#1D2123] w-full z-20">
        <img src={logo} alt="" className="pl-8 " />
        <BiSearch className="w-7 h-7 ml-20 fill-[#bababa]" />
        <input
          type="text"
          placeholder="Search"
          className="bg-inherit w-3/4 ml-8 text-white opacity-75 h-8 "
        />
      </div>
      <div className="fixed top-24 inline-block bg-[#1D2123] h-screen">

        <div className="bg-[#1D2123] pl-8 pr-8">
          <div className="w-14 h-56 bg-[#1A1E1F] mt-10 mb-5 flex flex-col justify-around items-center rounded-3xl p-3 ">
            <GoHomeFill className="w-7 h-7 fill-[#bababa]" onClick={() => navigate("/")} />
            <BiSolidPlaylist className="w-7 h-7 fill-[#bababa]"  onClick={() => navigate("/playlist")}/>
            <FaRadio className="w-7 h-7 fill-[#bababa]" onClick={() => navigate("/radio")} />
            <IoMdAddCircle className="w-7 h-7 fill-[#bababa]" onClick={() => navigate("/radio")} />
          </div>
          <div className="w-14 h-32 bg-[#1A1E1F] flex flex-col justify-around p-2 items-center rounded-3xl">
            <BsPersonFill className="w-7 h-7 fill-[#bababa]" onClick={() => navigate("/")} />
            <IoLogOut className="w-7 h-7 fill-[#bababa]" onClick={() => navigate("/")} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
