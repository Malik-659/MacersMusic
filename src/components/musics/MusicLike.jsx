import React from "react";
import { useDispatch } from "react-redux";
import { toggleMusicLike } from "../../store/music/musicAction";
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from "react-icons/md";

const MusicLike = ({ isLikedMusic, likes, musicId }) => {
  const dispatch = useDispatch();
  return (
    <>
      {isLikedMusic ? (
        <div
          onClick={() =>
            dispatch(toggleMusicLike({ setIsLike: false, likes, musicId }))
          }
        >
          <MdOutlineFavorite className="text-yellow-400 w-6 h-6 mx-2 z-20" />
        </div>
      ) : (
        <div
          onClick={() =>
            dispatch(toggleMusicLike({ setIsLike: true, likes, musicId }))
          }
        >
          <MdOutlineFavoriteBorder className="text-yellow-400 w-6 h-6 mx-2 z-20" />
        </div>
      )}
    </>
  );
};

export default MusicLike;
