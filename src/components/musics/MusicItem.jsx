import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteMusic,
  editMusic,
  getOneMusic,
} from "../../store/music/musicAction";
import { clearOneMusic } from "../../store/music/musicSlice";

const MusicItem = ({ music }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="text-white"
      onClick={() => {
        dispatch(getOneMusic({ id: music.id }));
      }}
    >
      <ul>
        <li>{music.name}</li>
        <li>{music.author}</li>
        <li>
          <img src={music.image} alt={music.name} width="100" height="100" />
        </li>
        <li>{music.date}</li>
      </ul>
      <button>Edit</button>
      <button onClick={() => dispatch(deleteMusic({ id: music.id }))}>
        Delete
      </button>
    </div>
  );
};

export default MusicItem;
