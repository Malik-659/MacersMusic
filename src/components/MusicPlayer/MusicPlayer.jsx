import React from "react";
import { PiShuffleAngularBold } from "react-icons/pi";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { BsFillPlayCircleFill, BsRepeat1 } from "react-icons/bs";
import { ImVolumeMedium } from "react-icons/im";

const MusicPlayer = () => {
  return (
    <div className="z-30 fixed bottom-0 bg-[]">
      <div className=" flex flex-row justify-around  items-center w-screen bg-gray-800 h-32">
        <div className="flex items-center">
          <img
            className="h-14 w-14 rounded-2xl"
            alt="hero_music"
            src="https://sun3-12.userapi.com/impg/AuZ4V3Yto0cETcQY6B75nCjWctRCzGS7oYUWyg/mvR3_pp6b8Q.jpg?size=651x807&quality=95&sign=4d2debaf84f8ef9883759d558565ca95&c_uniq_tag=XYe49_5jqkTpb3X8VqG0jwhkRls6SQyakR3pPEjmxvs&type=album"
          />
          <div className="ml-4">
            <h3 className=" text-sm text-white">Seasons in</h3>
            <p className=" text-xs text-white">James</p>
          </div>
        </div>
        <div>
          <div className=" w-1/2 m-auto flex items-center justify-around">
            <PiShuffleAngularBold className="fill-white h-6 w-6" />
            <BiSkipPrevious className="fill-white h-7 w-7" />
            <BsFillPlayCircleFill className="fill-white h-7 w-7" />
            <BiSkipNext className="fill-white h-7 w-7" />
            <BsRepeat1 className="fill-white h-6 w-6" />
          </div>
          <div className="mt-5">
            <input type="range" className=" w-[46.813rem] bg-[#FACD66]" />
          </div>
        </div>
        <div className="flex">
          <ImVolumeMedium className="fill-[#EFEEE0] h-5 w-5" />
          <input type="range" className="" />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
