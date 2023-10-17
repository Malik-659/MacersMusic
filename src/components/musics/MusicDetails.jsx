import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteMusic, getOneMusic, setComment } from "../../store/music/musicAction";
import CommentItem from "./CommentItem";
import { checkUserLogin } from "../../helpers/function";

const MusicDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { oneMusic } = useSelector((state) => state.musics);
  const [music, setMusic] = useState(oneMusic);
  const [com, setCom] = useState("");

  useEffect(() => {
    dispatch(getOneMusic({ id: id }));
  }, []);

  useEffect(() => {
    if (oneMusic) {
      setMusic(oneMusic);
    }
  }, [oneMusic]);

  const addCOMENT = () => {
    dispatch(setComment({ com: com, id: id }));
    setCom("");
  };

  return (
    <>
      {music && (
        <div className="pl-[120px] pt-[90px] w-[100%] bg-[#1D2123] pb-16 h-[800px]">
          <h1 className="text-center text-violet-600">
            comments of Music : {music.name}
          </h1>
          <div className="outline-none ">
            <div className="mt-8 mb-8 w-[1000px] h-[60px] bg-[#33373B] flex items-center justify-between rounded-[15px]">
              <p className="ml-2 text-yellow-400 text-[20px]">users</p>
              <p className="text-yellow-400 text-[20px]">comments</p>
              <p className="text-yellow-400 text-[20px] mr-2">button</p>
            </div>
            {music.comments.map((comment) => (
              <>
                <div className="mb-8 w-[1000px] h-[60px] bg-[#33373B] flex items-center justify-between rounded-[15px]">
                  <p className="ml-2 text-white text-white">@{comment.user}</p>
                  <p className="text-white text-[20px]">{comment.comment}</p>
                  {checkUserLogin() ? (
                    <button className="w-20 h-8 text-white bg-yellow-500 mr-4 rounded-[5px]"
                    onClick={() => {
                        dispatch(deleteMusic({id: id, musID: comment.id}))
                    }}>
                      delete
                    </button>
                  ) : (
                    <button className="w-20 h-8 text-white bg-yellow-500 mr-4 rounded-[5px]" >no work</button>
                  ) }
                </div>
              </>
            ))}
          </div>
          <div className="flex-column items-center justify-center">
            <h1 className=" text-yellow-300">Add Comment</h1>
            <input
              type="area"
              value={com}
              onChange={(e) => setCom(e.target.value)}
              placeholder=" ...comment"
              className="block rounded-[10px] w-[800px] h-8 bg-[#33373B] text-white pl-4"
            />
            <button className="text-white w-24 h-8 bg-yellow-400 rounded-[10px] mt-4" onClick={addCOMENT}>
              Add +
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MusicDetails;
