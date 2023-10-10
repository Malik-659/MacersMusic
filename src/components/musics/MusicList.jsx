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
    <div>
      {musics.map((music) => (
        <MusicItem key={music.id} music={music} />
      ))}
    </div>
  );
};

export default MusicList;
