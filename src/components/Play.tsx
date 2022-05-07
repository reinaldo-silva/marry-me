import { Play as PlayIcon } from "phosphor-react";
import React from "react";
import { useState } from "react";
import { Loading } from "./Loading";

interface PlayProps {
  nextStep: () => void;
}

const Play: React.FC<PlayProps> = ({ nextStep }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleStart = () => {
    setIsLoading(true);
    setTimeout(() => {
      nextStep();
    }, 4000);
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex justify-center items-center h-auto flex-col gap-4 group">
        <button
          onClick={handleStart}
          className={`w-20 h-20 rounded-full bg-zinc-200 flex justify-center items-center ${
            isLoading ? "animate-bounce" : "animate-pulse"
          } shadow-md`}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <PlayIcon
              weight="bold"
              className="w-8 h-8 text-zinc-600 group-hover:text-zinc-800"
            />
          )}
        </button>
        <span
          className={`font-bold text-lg overflow-hidden ${
            isLoading ? "opacity-100" : "opacity-0"
          } w-auto group-hover:opacity-100 text-zinc-100 transition-all duration-500`}
        >
          {isLoading ? "Carregando pedido..." : "Iniciar pedido de casamento?"}
        </span>
      </div>
    </div>
  );
};

export { Play };
