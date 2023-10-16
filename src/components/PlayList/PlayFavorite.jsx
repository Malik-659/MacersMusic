import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavoriteMusics } from "../../store/favorite/favoriteAction";
import FavoriteItem from "./FavoriteItem";
import { getAuthUser } from "../../helpers/function";
import { getMusic } from "../../store/music/musicAction";

const PlayFavorite = () => {
  const dispatch = useDispatch()
  const { musics } = useSelector(state => state.musics)
  const user = getAuthUser()

  useEffect(() => {
    dispatch(getMusic());
  }, []);
                                                              

  const favoriteMusics = musics.filter((music) =>
    music.likes.some((like) => like.user === user)
  );

  console.log(favoriteMusics, 'hello')


  return (
    <div className="pl-[120px] pt-[140px] w-[100%] h-[1200px] bg-[#1D2123]" >
      <button onClick={() => dispatch(getFavoriteMusics())} className="w-[120px] h-[38px] bg-[#FACD66] flex items-center justify-center rounded-[27px]">My favorites</button>
      <div className="flex flex-wrap mt-16">
          {favoriteMusics.map((item) => (
              <FavoriteItem item={item}/> 
            ))}
      </div>
    </div>
  );
};

export default PlayFavorite;
