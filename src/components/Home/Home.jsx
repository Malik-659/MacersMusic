import React from "react";
import heart from "../../images/Heart.svg";
import Rect from "../../images/Rectangle.svg";
import Rectangle from "../../images/Rectangle 14.svg";
import frame from "../../images/Frame 1.svg";

const Home = () => {
  return (
    <div className="pl-[110px] pt-[90px] w-[100%] h-full bg-[#1D2123] relative z-0">
      <div className="flex">
        <div className="ml-8 mt-10 rounded-[54px]  w-3/6">
          <img src={frame} alt="" className="w-full" />
        </div>
        <div className="">
          <p className="mt-10 ml-8 text-white text-[24px] font-bold">
            Top sharts
          </p>
          <div className=" flex items-center justify-between bg-[#1A1E1F] w-[400px] h-[96px] ml-8 mt-8 rounded-[20px] hover:bg-[#2a1d31]">
            <img
              src={Rect}
              alt=""
              className="w-[63px] h-[63px] ml-4 rounded-[10px]"
            />
            <div className="absolute ml-24">
              <p className="text-white text-[16px]">Golden age of 80s</p>
              <p className="text-white text-[12px] opacity-[50%] font-normal">
                Sean swadder
              </p>
              <p className="text-white text-[12px] font-normal">2:34:45</p>
            </div>
            <div className="flex items-center justify-center w-[37px] h-[37px] border-[1px] rounded-[50px] border-gray-500  mr-8 pt-[1px] ">
              <img src={heart} alt="" className="" />
            </div>
          </div>
        </div>
      </div>
      <p className="ml-8 mt-24 text-white text-[24px] font-bold">
        New Releases.
      </p>
      <div className="flex ml-8 mt-4 overflow-x-auto">
        <div className="overflow-hidden mr-12">
          <img
            src={Rectangle}
            alt=""
            className="w-[150px] h-[150px] rounded-[24px]"
          />
          <p className="mt-2 text-white text-[14px] font-light overflow-hidden">
            Life in a bubble
          </p>
        </div>
        <div className="overflow-hidden mr-12">
          <img
            src={Rectangle}
            alt=""
            className="w-[150px] h-[150px] rounded-[24px]"
          />
          <p className="mt-2 text-white text-[14px] font-light overflow-hidden">
            Life in a bubble
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
