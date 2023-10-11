import React from "react";
import logo from "../../images/logo.svg";
import Home from "../../images/Home.svg";
import Playlist from "../../images/playlist.svg";
import Radio from "../../images/radio.svg";
import Video from "../../images/videos.svg";
import searchlogo from "../../images/search.svg";
import Profile from "../../images/profile.svg";
import Logout from "../../images/Logout.svg";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pl-3 pt-8 pb-8 flex items-center bg-[#1D2123]">
        <img src={logo} alt="" className="pl-8 "/>
        <img src={searchlogo} alt="navlogo" className="pl-20" />
        <input
          type="text"
          placeholder="   Search"
          className="bg-inherit w-3/4 ml-8 white-[#FFFFFF40] opacity-75 h-8 "
        />
      </div>
      <div className="inline-block bg-[#1D2123] h-screen">
        <div className="bg-[#1D2123] pl-8 pr-8">
          <div className="w-14 h-56 bg-[#1A1E1F] mt-10 mb-5 flex flex-col justify-around items-center rounded-3xl p-3 ">
            <img
              src={Home}
              alt=""
              width="32"
              height="32"
              onClick={() => navigate("/")}
            />
            <img
              src={Playlist}
              alt=""
              width="32"
              height="32"
              onClick={() => navigate("/playlist")}
            />
            <img
              src={Radio}
              alt=""
              width="32"
              height="32"
              onClick={() => navigate("/radio")}
            />
            <img src={Video} alt="" width="32" height="32" />
          </div>
          <div className="w-14 h-32 bg-[#1A1E1F] flex flex-col justify-around p-2 items-center rounded-3xl">
            <img src={Profile} alt="" width="32" height="32" />
            <img src={Logout} alt="" width="32" height="32" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
