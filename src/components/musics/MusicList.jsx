import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusic, getMusicPlayer } from "../../store/music/musicAction";
import MusicItem from "./MusicItem";
import Lead from "../../images/Lead-image.svg";
import Play from "../../images/Play.svg";
import Square from "../../images/music-square.svg";
import Vector from "../../images/Vector.svg";
import MusicPaginaiton from "./MusicPaginaiton";

const MusicList = () => {
  const { seacrhMusic, musics } = useSelector((state) => state.musics);
  const { oneMusic} = useSelector(state => state.musics)
  const [image, setImage] = useState(oneMusic)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMusic());
    dispatch(getMusicPlayer());
  }, []);

  useEffect(() => {
    if(oneMusic){
      setImage(oneMusic)
    }
  },[oneMusic])

  console.log(image, 'image')

  return (
    <>
      <div className="pl-[120px] pt-[90px] w-[100%] bg-[#1D2123] pb-16 ">
        <div className="flex pl-9 pt-4">
          <img src={image.image} alt={image.name} className=" w-[300px] h-[288px] rounded-[35px]" />
          <div className="ml-8 mt-20 w-full">
            <p className="text-[33px] font-bold text-white">{image.name}</p>
            <p className="text-white text-[24px] font-light mt-4 mb-2">
              {image.author}
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
