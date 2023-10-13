import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
      <div className="">
        <div className="absolute left-60 flex items-center w-[60px] h-[60px] z-10">
          <MusicLike
            isLikedMusic={isLikedMusic}
            likes={music.likes}
            musicId={music.id}
            setIsLikedMusic={setIsLikedMusic}
          />
          {music.likes ? (
            <span className="text-xl">{music.likes.length}</span>
          ) : (
            <span className="text-xl">0</span>
          )}
        </div>
        <div
          className="text-white w-3/4 h-[60px] flex items-center m-8 bg-[#33373B5E] hover:bg-[#2a1d31] rounded-[15px] justify-between relative pl-4 pr-4" // Добавляем класс "relative"
          onClick={() => {
            dispatch(getOneMusic({ id: music.id }));
          }}
        >
          <img
            src={music.image}
            alt=""
            className="rounded-lg w-[40px] h-[40px]"
          />
          <p className="text-[13px] font-light">{music.name}</p>
          <p className="text-[14px] font-light">{music.author}</p>
          <p className="text-[11px] font-light">{music.date}</p>
          <img src={vertical} alt="" className="" />
        </div>
      </div>
    </>
  );
};

export default MusicItem;
