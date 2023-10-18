import React, { useEffect, useRef, useState } from "react";
import { Howl, Howler } from "howler";
import { PiShuffleAngularBold } from "react-icons/pi";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import {
  BsFillPlayCircleFill,
  BsPauseCircleFill,
  BsRepeat1,
  BsRepeat,
} from "react-icons/bs";
import { ImVolumeMedium } from "react-icons/im";
import { useDispatch, useSelector } from "react-redux";
import { getMusicPlayList } from "../../store/music/musicAction";

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const { musicPlayer } = useSelector((state) => state.musics);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userAction, setUserAction] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [currTime, setCurrTime] = useState({ min: 0, sec: 0 });
  const [isRepeat, setIsRepeat] = useState(
    localStorage.getItem("isRepeat") === "true" || false
  );

  const sound = useRef(null);

  useEffect(() => {
    dispatch(getMusicPlayList([musicPlayer[currentSongIndex]]));
  }, [currentSongIndex, musicPlayer]);

  useEffect(() => {
    if (sound.current) {
      sound.current.unload();
    }

    sound.current = new Howl({
      src: [musicPlayer[currentSongIndex]?.music],
      html5: true,
      onend: () => {
        playSong(isRepeat ? "current" : "next");
      },
      onplay: () => {
        setIsPlaying(true);
      },
      onpause: () => {
        setIsPlaying(false);
      },
    });

    if (userAction && isPlaying) {
      sound.current.play();
    }
  }, [currentSongIndex, musicPlayer, isPlaying, userAction, isRepeat]);

  useEffect(() => {
    if (userAction && isPlaying) {
      sound.current.play();
    }
  }, [userAction, isPlaying]);

  useEffect(() => {
    const currentDuration = sound.current ? sound.current.duration() : 0;
    const interval = setInterval(() => {
      const currentSeconds = sound.current ? sound.current.seek() : 0;
      setSeconds(currentSeconds);
      setCurrTime(formatTime(currentSeconds));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const playPauseButton = () => {
    const audioContext = Howler.ctx || Howler.ctx;
    if (!userAction && audioContext && audioContext.state === "suspended") {
      audioContext.resume().then(() => setUserAction(true));
    } else {
      setUserAction(true);
      if (isPlaying) {
        sound.current.pause();
      } else {
        sound.current.play();
      }
    }
  };

  const playSong = (direction) => {
    let index;

    if (direction === "prev") {
      index = (currentSongIndex - 1 + musicPlayer.length) % musicPlayer.length;
    } else if (direction === "next") {
      index = (currentSongIndex + 1) % musicPlayer.length;
    }

    setCurrentSongIndex(index);
    setSeconds(0);
    setCurrTime({ min: 0, sec: 0 });
  };

  const repeatSong = () => {
    const newIsRepeat = !isRepeat;
    setIsRepeat(newIsRepeat);
    localStorage.setItem("isRepeat", newIsRepeat.toString());

    if (newIsRepeat) {
      sound.current.seek(0);
      sound.current.play();
    }
  };

  const formatTime = (timeInSeconds) => {
    const min = Math.floor(timeInSeconds / 60);
    const sec = Math.floor(timeInSeconds % 60);
    return { min, sec };
  };

  const onSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    sound.current.seek(newTime);
    setSeconds(newTime);
    setCurrTime(formatTime(newTime));
  };

  const onVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    sound.current.volume(newVolume);
  };

  return (
    <div className="z-30 fixed bottom-0">
      <div className="flex flex-row justify-around items-center w-screen bg-[#00000085] h-32">
        {musicPlayer.length > 0 && (
          <div className="flex items-center">
            <div className="w-14 h-14 overflow-hidden">
              <img
                className="h-full w-full rounded-2xl"
                alt={musicPlayer[currentSongIndex]?.name || ""}
                src={musicPlayer[currentSongIndex]?.image || ""}
              />
            </div>
            <div className="ml-4">
              <h3 className="text-sm text-white">
                {musicPlayer[currentSongIndex]?.name || ""}
              </h3>
              <p className="text-xs text-white">
                {musicPlayer[currentSongIndex]?.author || ""}
              </p>
            </div>
          </div>
        )}
        <div>
          <div className="w-1/2 m-auto flex items-center justify-around">
            <PiShuffleAngularBold className="fill-white h-6 w-6" />
            <BiSkipPrevious
              onClick={() => playSong("prev")}
              className="fill-white h-7 w-7"
            />
            {isPlaying ? (
              <BsFillPlayCircleFill
                onClick={playPauseButton}
                className="fill-white h-7 w-7 cursor-pointer"
              />
            ) : (
              <BsPauseCircleFill
                onClick={playPauseButton}
                className="fill-white h-7 w-7 cursor-pointer"
              />
            )}
            <BiSkipNext
              onClick={() => playSong("next")}
              className="fill-white h-7 w-7"
            />
            {isRepeat ? (
              <BsRepeat
                onClick={() => repeatSong()}
                className="fill-white h-6 w-6"
              />
            ) : (
              <BsRepeat1
                onClick={() => repeatSong()}
                className="fill-white h-6 w-6"
              />
            )}
          </div>
          <div className="mt-5">
            <input
              value={seconds}
              type="range"
              min={0}
              max={sound.current ? sound.current.duration() : 0}
              step={1}
              onChange={onSeek}
              className="w-[46.813rem] bg-[#FACD66]"
            />
            <h3 className="text-white font-bold">{`${currTime.min}:${
              currTime.sec
            }/${formatTime(sound.current ? sound.current.duration() : 0).min}:${
              formatTime(sound.current ? sound.current.duration() : 0).sec
            }`}</h3>
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
