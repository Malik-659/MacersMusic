import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setMusic } from "../../store/music/musicAction";

const MusicCreate = () => {
  const dispatch = useDispatch();
  const [addMusic, setAddMusic] = useState({
    name: "",
    image: "",
    music: "",
    author: "",
    date: "",
  });
  console.log(addMusic);
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setAddMusic({ ...addMusic, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Image"
        onChange={(e) => setAddMusic({ ...addMusic, image: e.target.value })}
      />
      <input
        type="text"
        placeholder="Href"
        onChange={(e) => setAddMusic({ ...addMusic, music: e.target.value })}
      />
      <input
        type="text"
        placeholder="Author"
        onChange={(e) => setAddMusic({ ...addMusic, author: e.target.value })}
      />
      <input
        type="text"
        placeholder="Date"
        onChange={(e) => setAddMusic({ ...addMusic, date: e.target.value })}
      />
      <button onClick={() => dispatch(setMusic(addMusic))}>Add Music</button>
    </div>
  );
};

export default MusicCreate;
