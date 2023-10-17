import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusic, getMusicPlayer } from "../../store/music/musicAction";
import MusicItem from "./MusicItem";
import Lead from "../../images/Lead-image.svg";
import Play from "../../images/Play.svg";
import Square from "../../images/music-square.svg";
import Vector from "../../images/Vector.svg";

const MusicList = () => {
  const { seacrhMusic, musics } = useSelector((state) => state.musics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMusic());
    dispatch(getMusicPlayer());
  }, []);

  return (
    <>
      <div className="pl-[120px] pt-[90px] w-[100%] bg-[#1D2123] pb-16">
        <div className="flex pl-9 pt-4">
          <img src={Lead} alt="" className="" />
          <div className="ml-8 mt-24">
            <p className="text-[35px] font-bold text-white">Tomorrow’s tunes</p>
            <p className="text-white text-[14px] font-light mt-4 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis
            </p>
            <p className="text-white text-[14px] font-light">
              64 songs ~ 16 hrs+
            </p>
            <div className="flex items-center mt-9">
              <div className="flex items-center justify-around w-[90px] h-[38px] bg-[#FFFFFF12] rounded-[30px] ">
                <img src={Play} alt="" className="w-[16px] h-[16px]" />
                <p className="text-[12px] font-normal text-white">Play all</p>
              </div>
              <div className="flex items-center justify-around w-[150px] h-[38px] bg-[#FFFFFF12] rounded-[30px] mr-8 ml-8 ">
                <img src={Square} alt="" />
                <p className="text-[12px] font-normal text-white">
                  add to collection
                </p>
              </div>
              <div className="flex items-center justify-around w-[38px] h-[38px] bg-[#FFFFFF12] rounded-[38px] ">
                <img src={Vector} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pl-[120px] pt-10 w-[100%] h-screen bg-[#1D2123] relative overflow-auto">
        {musics.map((music) => (
          <MusicItem key={music.id} music={music} />
        ))}
      </div>
    </>
  );
};

export default MusicList;
