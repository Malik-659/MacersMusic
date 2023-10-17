import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAlbum,
  getCategories,
  getMusic,
  setMusic,
  EditMusic
} from "../../store/music/musicAction";
import MusicList from "./MusicList";
import MusicItem2 from "./musicItem2";
import { changeEdit, changeEditTrue } from "../../store/music/musicSlice";

const MusicCreate = () => {
  const dispatch = useDispatch();
  const { categories, albums } = useSelector((state) => state.musics);
  const { musics } = useSelector((state) => state.musics);
  const { oneMusic } = useSelector((state) => state.musics);
  const { isEdit } = useSelector((state) => state.musics);
  const [isEditing, setIsEditing] = useState(false);
  const [addMusic, setAddMusic] = useState({
    name: "",
    image: "",
    music: "",
    author: "",
    category: "",
    album: "",
  });

  const [editMusic, setEditMusic] = useState(oneMusic)

  function createMusic() {
    for (let key in addMusic) {
      if (!addMusic[key].trim()) return alert("empty");
    }

    dispatch(setMusic({ addMusic }));
  }

  useEffect(() => {
    dispatch(getMusic())
    setEditMusic(oneMusic)
  }, [oneMusic])

  useEffect(() => {
    dispatch(getCategories());
    dispatch(getAlbum());
  }, []);

  useEffect(() => {
    setIsEditing(isEdit);
  }, [isEdit]);


  return (
    <div className="pl-[140px] pt-[90px] w-[100%] h-full bg-[#1D2123] relative z-0 ">
      {isEditing ? (
        <div className="border-[#626263] border-2 pl-[30px] pr-[30px] w-9/12 h-[40.625rem] rounded-[30px] shadow-inner shadow-[]">
        <h1 className="text-center text-[24px] text-white mt-8">
          EditMusic
        </h1>
        <div className="flex justify-around  items-center">
          <div>
            <img
              src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
              alt=""
              className=" rounded-3xl w-96 h-96"
            />
          </div>
          <div className="flex flex-col items-center bg-[]">
            <input
              type="text"
              placeholder="Название песни"
              value={editMusic.name}
              onChange={(e) =>
                setEditMusic({ ...editMusic, name: e.target.value })
              }
              className="bg-[#1A1E1F] w-[450px] h-[40px] rounded-3xl mt-8 text-gray-200 outline-none pl-[25px]"
            />
            <input
              type="text"
              placeholder="Фото"
              value={editMusic.image}
              onChange={(e) =>
                setEditMusic({ ...editMusic, image: e.target.value })
              }
              className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
            />
            <input
              type="text"
              placeholder="Ссылка на песню"
              value={editMusic.music}
              onChange={(e) =>
                setEditMusic({ ...editMusic, music: e.target.value })
              }
              className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
            />
            <input
              type="text"
              placeholder="Автор"
              value={editMusic.author}
              onChange={(e) =>
                setEditMusic({ ...editMusic, author: e.target.value })
              }
              className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
            />

            <select
              onChange={(e) =>
                setEditMusic({ ...editMusic, category: e.target.value })
              }
              className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
            >
              <option disabled>Choose genre</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <select
              onChange={(e) =>
                setEditMusic({ ...editMusic, album: e.target.value })
              }
              className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
            >
              <option disabled>Choose album</option>
              {albums.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>

            <button
              onClick={() =>  {dispatch(EditMusic({music: editMusic}))
                dispatch(changeEditTrue())
            }}
              className="w-[150px] h-[40px] bg-[#1A1E1F] mt-4 rounded-[15px] text-white "
            >
              changeMusic
            </button>
          </div>
        </div>
      </div>
      ) : (
        <>
          <div className="border-[#626263] border-2 pl-[30px] pr-[30px] w-9/12 h-[40.625rem] rounded-[30px] shadow-inner shadow-[]">
            <h1 className="text-center text-[24px] text-white mt-8">
              CreateMusic
            </h1>
            <div className="flex justify-around  items-center">
              <div>
                <img
                  src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                  alt=""
                  className=" rounded-3xl w-96 h-96"
                />
              </div>
              <div className="flex flex-col items-center bg-[]">
                <input
                  type="text"
                  placeholder="Название песни"
                  value=""
                  onChange={(e) =>
                    setAddMusic({ ...addMusic, name: e.target.value })
                  }
                  className="bg-[#1A1E1F] w-[450px] h-[40px] rounded-3xl mt-8 text-gray-200 outline-none pl-[25px]"
                />
                <input
                  type="text"
                  placeholder="Фото"
                  value=""
                  onChange={(e) =>
                    setAddMusic({ ...addMusic, image: e.target.value })
                  }
                  className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
                />
                <input
                  type="text"
                  placeholder="Ссылка на песню"
                  value=""
                  onChange={(e) =>
                    setAddMusic({ ...addMusic, music: e.target.value })
                  }
                  className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
                />
                <input
                  type="text"
                  placeholder="Автор"
                  value=""
                  onChange={(e) =>
                    setAddMusic({ ...addMusic, author: e.target.value })
                  }
                  className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
                />

                <select
                  onChange={(e) =>
                    setAddMusic({ ...addMusic, category: e.target.value })
                  }
                  className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
                >
                  <option disabled>Choose genre</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <select
                  onChange={(e) =>
                    setAddMusic({ ...addMusic, album: e.target.value })
                  }
                  className="bg-[#1A1E1F] w-[450px] h-[35px] rounded-3xl mt-5 text-gray-200 outline-none pl-[25px]"
                >
                  <option disabled>Choose album</option>
                  {albums.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>

                <button
                  onClick={createMusic}
                  className="w-[150px] h-[40px] bg-[#1A1E1F] mt-4 rounded-[15px] text-white "
                >
                  Add Music
                </button>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-screen bg-[#1D2123] relative overflow-auto">
            {musics.map((music) => (
              <MusicItem2 key={music.id} music={music} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MusicCreate;
