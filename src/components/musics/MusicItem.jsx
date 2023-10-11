import React from "react";
import { useDispatch } from "react-redux";
import {
  deleteMusic,
  editMusic,
  getOneMusic,
} from "../../store/music/musicAction";

const MusicItem = ({ music }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="ml-32 mt-20"
      onClick={() => dispatch(getOneMusic({ id: music.id }))}
    >
      <ul>
        <li>{music.name}</li>
        <li>{music.author}</li>
        <li>
          <img src={music.image} alt={music.name} width="100" height="100" />
        </li>
        <li>
          <audio
            controls
            src="https://cdn7.sefon.pro/prev/tBnqyhWK8--beLfvAAo6vA/1697073405/2/T-Fest%20%26%20%D0%A1%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%BD%D0%B8%D1%82%20-%20%D0%9B%D0%B0%D0%BC%D0%B1%D0%B0%D0%B4%D0%B0%20%28192kbps%29.mp3"
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
