import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusic } from "../../store/music/musicAction";
import MusicItem from "./MusicItem";
import Lead from "../../images/Lead-image.svg";
import Play from "../../images/Play.svg";
import Square from "../../images/music-square.svg";
import Vector from "../../images/Vector.svg";
import MusicPaginaiton from "./MusicPaginaiton";

const MusicList = () => {
  const { musics, musicPlyaListDetails } = useSelector((state) => state.musics);
  const [isComponentMounted, setIsComponentMounted] = useState(false);
  const list = (musicPlyaListDetails && musicPlyaListDetails[0]) || {};
  const imageSrc = list.image || "";
  const altText = list.name || "";
  const dispatch = useDispatch();

  useEffect(() => {
    if (isComponentMounted) {
      dispatch(getMusic());
    }
  }, [dispatch, isComponentMounted]);

  useEffect(() => {
    setIsComponentMounted(true);
  }, []);

  return (
    <>
      <div className="pl-[120px] pt-[90px] w-[100%] h-1/3 bg-[#1D2123]">
        <div className="flex pl-9 pt-4">
          <img
            src={imageSrc}
            alt={altText}
            className="w-[300px] h-[288px] rounded-[35px]"
          />
          <div className="ml-8 mt-20 w-full">
            <p className="text-[33px] font-bold text-white">
              {list ? list.name : ""}
            </p>
            <p className="text-white text-[24px] font-light mt-4 mb-2">
              {list ? list.author : ""}
            </p>
            <p className="text-white text-[16px] font-light">
              {musics.length} songs ~ {musics.length * 3.7} hrs+
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
        <MusicPaginaiton />
      </div>
    </>
  );
};

export default MusicList;
