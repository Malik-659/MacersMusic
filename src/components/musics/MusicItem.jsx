import React from "react";
import { useDispatch } from "react-redux";
import { deleteMusic, editMusic } from "../../store/music/musicAction";

const MusicItem = ({ music }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        <li>{music.name}</li>
        <li>{music.author}</li>
        <li>{music.image}</li>
        <li>
          <audio controls src={music.music}></audio>
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
