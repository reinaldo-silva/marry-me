import { Pause, Play } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";

interface MusicPlayerProps {
  onStart: boolean;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ onStart }) => {
  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/music.mp3") : undefined
  );

  const [onPlay, setOnPlay] = useState(false);

  const start = () => {
    musicPlayers.current?.play();
    setOnPlay(true);
  };

  const stop = () => {
    musicPlayers.current?.pause();
    setOnPlay(false);
  };

  useEffect(() => {
    onStart && start();
  }, [onStart]);

  return (
    <div className="absolute bottom-5 right-5 p-2 bg-zinc-300 flex gap-2 rounded-md">
      <button
        onClick={start}
        type="button"
        className="transition-all duration-500"
      >
        <Play weight={onPlay ? "fill" : "light"} />
      </button>
      <button onClick={stop} type="button" className="">
        <Pause weight={!onPlay ? "fill" : "light"} />
      </button>
    </div>
  );
};

export default MusicPlayer;
