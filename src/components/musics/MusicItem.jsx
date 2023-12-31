import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteMusic,
  editMusic,
  getOneMusic,
  setComment,
} from "../../store/music/musicAction";
import { clearOneMusic } from "../../store/music/musicSlice";

import vertical from "../../images/more-vertical.svg";
import { useNavigate } from "react-router-dom";
import MusicLike from "./MusicLike";
import { checkUserLogin, getAuthUser } from "../../helpers/function";

const MusicItem = ({ music }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLikedMusic, setIsLikedMusic] = useState(false);

  const checkMusicLike = () => {
    const user = getAuthUser();
    if (!music.likes) return;
    const userLike = music.likes.find((like) => like.user === user);
    if (userLike) {
      setIsLikedMusic(true);
    } else {
      setIsLikedMusic(false);
    }
  };

  useEffect(() => {
    checkMusicLike();
  }, []);

  return (
    <>
      <div className="outline-none">
        {checkUserLogin() && (
          <div className="absolute left-60 flex items-center w-[60px] h-[60px] z-10 outline-none">
            <MusicLike
              isLikedMusic={isLikedMusic}
              likes={music.likes}
              musicId={music.id}
              setIsLikedMusic={setIsLikedMusic}
            />
            {music.likes ? (
              <span className="text-xl">{music.likes.length}</span>
            ) : (
              <span className="text-xl">f</span>
            )}
          </div>
        )}

        <div
          className="text-white w-3/4 h-[60px] flex items-center m-8 bg-[#33373B5E]  rounded-[15px] justify-between relative pl-4 pr-4" // Добавляем класс "relative"
          onClick={() => {
            dispatch(getOneMusic({ id: music.id }));
          }}
        >
          <img
            src={music.image}
            alt=""
            className="rounded-lg w-[40px] h-[40px]"
          />
          <div className="outline-none w-[100px] pl-8 ">
            <p className="text-[14px] font-normal">{music.name}</p>
          </div>
          <div className="outline-none w-[100px] pl-8 ">
            <p className="text-[14px] font-normal">{music.author}</p>
          </div>
          <div className="outline-none w-[50px]">
            <p className="text-[11px] font-light">{music.date}</p>
          </div>
          {checkUserLogin() && (
            <img src={vertical} alt="" className="" onClick={() => {navigate(`/details/${music.id}`)}} />
            )}
        </div>
      </div>
    </>
  );
};

export default MusicItem;
