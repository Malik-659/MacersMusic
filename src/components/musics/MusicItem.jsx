import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteMusic,
  editMusic,
  getOneMusic,
} from "../../store/music/musicAction";
import { clearOneMusic } from "../../store/music/musicSlice";
import vertical from '../../images/more-vertical.svg'
import heart from '../../images/Heart.svg'

const MusicItem = ({ music }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="text-white w-[65rem] h-[60px] flex items-center m-8 bg-[#33373B5E] rounded-[15px] justify-between relative pl-4 pr-4 hover:bg-[#2a1d31] " // Добавляем класс "relative"
      onClick={() => {
        dispatch(getOneMusic({ id: music.id }));
      }}
    >
      <img src={music.image} alt="" className="rounded-lg w-[40px] h-[40px]" />
      <p className="text-[13px] font-light">{music.name}</p>
      <p className="text-[14px] font-light">{music.author}</p>
      <p className="text-[11px] font-light">{music.date}</p>
      <img src={vertical} alt="" className=""/>
      <div className="absolute left-20 flex items-center">
        <img src={heart} alt="" className="w-[20px] h-[20px]" />
      </div>
    </div>
  );
};

export default MusicItem;
