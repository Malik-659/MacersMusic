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
          <audio
            controls
            src="https://cdn7.sefon.pro/prev/7QJOfO7C8m05NHEPtgUcUQ/1697039772/506/Bakhtin%20-%20%D0%A6%D0%B5%D0%BB%D0%BE%D0%B2%D0%B0%D0%BB%D0%B0%20%28192kbps%29.mp3 "
          ></audio>
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
