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
      <div
        className="text-white w-[65rem] h-[60px] flex items-center m-8 bg-[#33373B5E] rounded-[15px] justify-between relative pl-4 pr-4" // Добавляем класс "relative"
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
        <div className="absolute left-20 flex items-center">
          {checkUserLogin() && (
            <MusicLike
              isLikedMusic={isLikedMusic}
              likes={music.likes}
              productId={music.id}
            />
          )}
          {music.likes ? (
            <span className="text-xl">{music.likes.length}</span>
          ) : (
            <span className="text-xl">0</span>
          )}
        </div>
      </div>
    </>
  );
};

export default MusicItem;
