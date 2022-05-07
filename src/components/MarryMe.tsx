import React from "react";
import { Picture } from "./Picture";

const MarryMe: React.FC = () => {
  return (
    <div className="w-full h-full max-w-7xl flex justify-evenly items-center flex-col transition-all duration-1000">
      <div className="flex justify-around w-full">
        <Picture source="/nos.jpeg" alt="Nos" />
        <Picture source="/nos.jpeg" alt="Nos" />
      </div>
      <h2 className="font-galada text-7xl text-zinc-200 animate-pulse">
        Aceita casar comigo?
      </h2>
      <Picture source="/nos.jpeg" alt="Nos" animate="animate-wiggleReverse" />
    </div>
  );
};

export { MarryMe };
