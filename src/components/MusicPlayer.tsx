import { ArrowClockwise, Pause, Play } from "phosphor-react";
import React, { useEffect, useRef, useState } from "react";

interface MusicPlayerProps {
  onStart: boolean;
  setSteps: (step: number) => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ onStart, setSteps }) => {
  const musicPlayers = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("/music.mp3") : undefined
  );

  const [onPlay, setOnPlay] = useState(false);

  const start = () => {
    if (musicPlayers.current) {
      musicPlayers.current.play();
      musicPlayers.current.loop;
    }
    setOnPlay(true);
  };

  const stop = () => {
    musicPlayers.current && musicPlayers.current.pause();
    setOnPlay(false);
  };

  useEffect(() => {
    onStart && start();
  }, [onStart]);

  return (
    <div className="absolute z-50 bottom-5 right-5 p-2 bg-zinc-300 flex gap-2 rounded-md shadow-md">
      <button
        onClick={() => {
          if (musicPlayers.current) musicPlayers.current.currentTime = 0;
          stop();
          setSteps(0);
        }}
        type="button"
        className="transition-all duration-500"
      >
        <ArrowClockwise
          weight={musicPlayers.current?.currentTime === 0 ? "bold" : "light"}
        />
      </button>
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

export { MusicPlayer };
