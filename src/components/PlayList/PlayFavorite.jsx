import React from "react";
import { useDispatch } from "react-redux";
import { getFavoriteMusic } from "../../store/favorite/favoriteAction";

const PlayFavorite = () => {
  const dispatch = useDispatch();
  return (
    <div className=" w-[100%] h-full absolute top-32 z-0 flex justify-center">
      <button onClick={() => dispatch(getFavoriteMusic())}>edewwe</button>
    </div>
  );
};

export default PlayFavorite;
