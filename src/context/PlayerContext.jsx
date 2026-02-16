import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const AudioRef = useRef();
  const seekBar = useRef();
  const seekBg = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playerStatus, setPlayerStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const Play = () => {
    AudioRef.current.play();
    setPlayerStatus(true);
  };

  const Pause = () => {
    AudioRef.current.pause();
    setPlayerStatus(false);
  };

  const playerWithId = async(id)=>{
    await setTrack(songsData[id])
    await AudioRef.current.play();
    setPlayerStatus(true);
  }

  useEffect(() => {
    setTimeout(() => {
      AudioRef.current.ontimeupdate = () => {
        seekBar.current.style.width = (Math.floor(AudioRef.current.currentTime) / Math.floor(AudioRef.current.duration)) * 100 + "%";
        setTime({
          currentTime: {
            second: Math.floor(AudioRef.current.currentTime % 60),
            minute: Math.floor(AudioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(AudioRef.current.duration % 60),
            minute: Math.floor(AudioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [AudioRef]);
  const contextValue = {
    AudioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playerStatus,
    setPlayerStatus,
    time,
    setTime,
    Play,
    Pause,
    playerWithId
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
