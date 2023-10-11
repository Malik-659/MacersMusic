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
    category: "",
    genre: "",
    album: "",
  });

  function createMusic() {
    for (let key in addMusic) {
      if (!addMusic[key].trim()) return alert("empty");
    }

    dispatch(setMusic({ addMusic }));
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Название песни"
        onChange={(e) => setAddMusic({ ...addMusic, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Фото"
        onChange={(e) => setAddMusic({ ...addMusic, image: e.target.value })}
      />
      <input
        type="text"
        placeholder="Ссылка на песню"
        onChange={(e) => setAddMusic({ ...addMusic, music: e.target.value })}
      />
      <input
        type="text"
        placeholder="Автор"
        onChange={(e) => setAddMusic({ ...addMusic, author: e.target.value })}
      />
      <input
        type="date"
        placeholder="Дата выхода"
        onChange={(e) => setAddMusic({ ...addMusic, date: e.target.value })}
      />
      <input
        type="text"
        placeholder="Категория"
        onChange={(e) => setAddMusic({ ...addMusic, category: e.target.value })}
      />
      <input
        type="text"
        placeholder="Жанр"
        onChange={(e) => setAddMusic({ ...addMusic, genre: e.target.value })}
      />
      <input
        type="text"
        placeholder="Альбом"
        onChange={(e) => setAddMusic({ ...addMusic, album: e.target.value })}
      />
      <button onClick={createMusic}>Add Music</button>
    </div>
  );
};

export default MusicCreate;
