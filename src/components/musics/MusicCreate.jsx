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
    category: "",
    album: "",
  });

  function createMusic() {
    for (let key in addMusic) {
      if (!addMusic[key].trim()) return alert("empty");
    }

    dispatch(setMusic({ addMusic }));
  }

  return (
    <div className="pl-[120px] pt-[90px] w-[100%] h-full bg-[#1D2123] relative z-0 flex justify-center">
      <div className="border-[#626263] border-2 pl-[30px] pr-[30px] rounded-[30px] shadow-inner shadow-[]">
        <h1 className="text-center text-[24px] text-white mt-8">CreateMusic</h1>
        <div className="flex flex-col items-center bg-[]">
          <input
            type="text"
            placeholder="Название песни"
            onChange={(e) => setAddMusic({ ...addMusic, name: e.target.value })}
            className="bg-[#1A1E1F] w-[450px] h-[40px] rounded-3xl mt-8 text-gray-200 outline-none pl-[25px]"
          />
          <input
            type="text"
            placeholder="Фото"
            onChange={(e) =>
              setAddMusic({ ...addMusic, image: e.target.value })
            }
            className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
          />
          <input
            type="text"
            placeholder="Ссылка на песню"
            onChange={(e) =>
              setAddMusic({ ...addMusic, music: e.target.value })
            }
            className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
          />
          <input
            type="text"
            placeholder="Автор"
            onChange={(e) =>
              setAddMusic({ ...addMusic, author: e.target.value })
            }
            className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
          />
          <input
            type="text"
            placeholder="Категория"
            onChange={(e) =>
              setAddMusic({ ...addMusic, category: e.target.value })
            }
            className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
          />
          <input
            type="text"
            placeholder="Альбом"
            onChange={(e) =>
              setAddMusic({ ...addMusic, album: e.target.value })
            }
            className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
          />
          <button
            onClick={createMusic}
            className="w-[150px] h-[40px] bg-[#1A1E1F] mt-4 rounded-[15px] text-white "
          >
            Add Music
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicCreate;
