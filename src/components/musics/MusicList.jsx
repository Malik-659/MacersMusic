import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMusic } from "../../store/music/musicAction";
import MusicItem from "./MusicItem";

const MusicList = () => {
  const { musics } = useSelector((state) => state.musics);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMusic());
  }, []);
  return (
    <div className="pl-[120px] pt-[90px] w-[100%] h-full bg-[#1D2123] relative z-0">
      {musics.map((music) => (
        <MusicItem key={music.id} music={music} />
      ))}
    </div>
  );
};

export default MusicList;
