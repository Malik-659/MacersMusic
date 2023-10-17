import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import { PiShuffleAngularBold } from "react-icons/pi";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { BsFillPlayCircleFill, BsRepeat1 } from "react-icons/bs";
import { ImVolumeMedium } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import changeShow from '../../store/account/accountSlice'
 
const formatTime = (timeInSeconds) => {
  const min = Math.floor(timeInSeconds / 60);
  const sec = Math.floor(timeInSeconds % 60);
  return { min, sec };
};

const MusicPlayer = () => {
  const { oneMusic } = useSelector((state) => state.musics);
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { pause, duration, sound }] = useSound(oneMusic.music);
  const [seconds, setSeconds] = useState(0);
  const [currTime, setCurrTime] = useState(formatTime(0));
  const dispatch = useDispatch()

  const playingButton = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    pause();
    setIsPlaying(false);
  }, [oneMusic]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        const currentSeconds = sound.seek([]);
        setSeconds(currentSeconds);
        setCurrTime(formatTime(currentSeconds));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [sound]);

  const onSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    setSeconds(newTime);
    sound.seek(newTime);
  };

  const onVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    sound.volume(newVolume);
  };

  return (
    <div className="z-30 fixed bottom-0 ">
      <div className="flex flex-row justify-around items-center w-screen bg-[#00000085] h-32">
        <div className="flex items-center">
          <div className="w-14 h-14 overflow-hidden">
            <img
              className="h-full w-full rounded-2xl"
              alt={oneMusic.name}
              src={oneMusic.image}
            />
          </div>
          <div className="ml-4">
            <h3 className="text-sm text-white">{oneMusic.name}</h3>
            <p className="text-xs text-white">{oneMusic.author}</p>
          </div>
        </div>
        <div>
          <div className="w-1/2 m-auto flex items-center justify-around">
            <PiShuffleAngularBold className="fill-white h-6 w-6" />
            <BiSkipPrevious className="fill-white h-7 w-7" />
            <BsFillPlayCircleFill
              onClick={playingButton}
              className="fill-white h-7 w-7 cursor-pointer"
            ></BsFillPlayCircleFill>
            <BiSkipNext className="fill-white h-7 w-7" />
            <BsRepeat1 className="fill-white h-6 w-6" />
          </div>
          <div className="mt-5">
            <input
              value={seconds}
              type="range"
              min={0}
              max={duration / 1000 || 0}
              step={1}
              onChange={onSeek}
              className="w-[46.813rem] bg-[#FACD66]"
            />
            <h3 className="text-white font-bold">{`${currTime.min}:${currTime.sec}/${
              formatTime(duration / 1000).min
            }:${formatTime(duration / 1000).sec}`}</h3>
          </div>
        </div>
        <div className="flex">
          <ImVolumeMedium className="fill-[#EFEEE0] h-5 w-5" />
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            onChange={onVolumeChange}
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
