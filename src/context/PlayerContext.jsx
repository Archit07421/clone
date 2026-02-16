import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/assets";


export const PlayerContext = createContext();



const PlayerContextProvider = (props)=>{

  const AudioRef = useRef();
  const seekBar = useRef();
  const seekBg = useRef();

  const [track,setTrack]=useState(songsData[0]);
  const [playerStatus,setPlayerStatus]=useState(false);
  const [time,setTime]=useState({
    currentTime:{
      second:0,
      minute:0
    },
    totalTime:{
      second:0,
      minute:0
    }
  })

  const Play=()=>{
    AudioRef.current.play();
    setPlayerStatus(true);
  }

  const Pause = () =>{
    AudioRef.current.pause();
    setPlayerStatus(false);
  }
  const contextValue={
    AudioRef,
    seekBar,
    seekBg,
    track,setTrack,
    playerStatus,setPlayerStatus,
    time,setTime,
    Play,
    Pause

  }

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  )
}

export default PlayerContextProvider;