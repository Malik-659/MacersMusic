import React from "react";
import { useDispatch } from "react-redux";
import { toggleMusicLike } from "../../store/music/musicAction";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";
import { checkUserLogin } from "../../helpers/function";

const MusicLike = ({ isLikedMusic, likes, musicId, setIsLikedMusic }) => {
  const dispatch = useDispatch();
  return (
    <>
      {checkUserLogin() ? (
        <>
          {isLikedMusic ? (
            <div
              onClick={() => {
                dispatch(toggleMusicLike({ setIsLike: false, likes, musicId }));
                setIsLikedMusic(!isLikedMusic);
              }}
            >
              <MdOutlineFavorite className="text-yellow-400 w-6 h-6 mx-2 z-20" />
            </div>
          ) : (
            <div
              onClick={() => {
                dispatch(toggleMusicLike({ setIsLike: true, likes, musicId }));
                setIsLikedMusic(!isLikedMusic);
              }}
            >
              <MdOutlineFavoriteBorder className="text-yellow-400 w-6 h-6 mx-2 z-20" />
            </div>
          )}
        </>
      ) : (
        <>
          {isLikedMusic ? (
            <div>
              <MdOutlineFavorite className="text-yellow-400 w-6 h-6 mx-2 z-20" />
            </div>
          ) : (
            <div>
              <MdOutlineFavoriteBorder className="text-yellow-400 w-6 h-6 mx-2 z-20" />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default MusicLike;
