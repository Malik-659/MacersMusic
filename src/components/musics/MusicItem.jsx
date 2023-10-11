import React from "react";

const MusicItem = ({ music }) => {
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
    </div>
  );
};

export default MusicItem;
