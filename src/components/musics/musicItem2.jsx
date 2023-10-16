import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteMusic,
  editMusic,
  getOneMusic,
} from "../../store/music/musicAction";
import { clearOneMusic } from "../../store/music/musicSlice";
import vertical from "../../images/more-vertical.svg";
import heart from "../../images/Heart.svg";
import { useNavigate } from "react-router-dom";
import MusicLike from "./MusicLike";
import { checkUserLogin, getAuthUser } from "../../helpers/function";
import MusicPlayer from "../MusicPlayer/MusicPlayer";
import changeShow from "../../store/account/accountSlice"
import { changeEdit } from "../../store/music/musicSlice";
import { getMus } from "../../store/music/musicAction";

const MusicItem2 = ({ music }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleEditClick = () => {
    dispatch(changeEdit());
  };


  return (
    <>
      <div className="outline-none">
        <div
          className="text-white w-3/4 h-[60px] flex items-center mb-6 mt-6 bg-[#33373B5E]  rounded-[15px] justify-between relative pl-4 pr-4" // Добавляем класс "relative"
        >
          <img
            src={music.image}
            alt=""
            className="rounded-lg w-[40px] h-[40px]"
            onClick={() => {
                dispatch(getOneMusic({ id: music.id }));
              }}
          />
          <p className="text-[13px] font-light" onClick={() => {
            dispatch(getOneMusic({ id: music.id }));
          }}>{music.name}</p>
          <p className="text-[14px] font-light" onClick={() => {
            dispatch(getOneMusic({ id: music.id }));
          }}>{music.author}</p>
          <div className="flex items-center ">
            <button className="w-20 h-8 text-white bg-yellow-500 mr-4 rounded-[5px]"
            onClick={() => {dispatch(deleteMusic({id: music.id}))}}
            >delete</button>
            <button className="w-20 h-8 text-white bg-yellow-600 rounded-[5px]" onClick={() => {handleEditClick()
            dispatch(getOneMusic({id: music.id}))
            navigate('/radio')}
            }>edit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MusicItem2;
