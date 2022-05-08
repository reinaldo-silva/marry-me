import React, { useEffect, useMemo, useState } from "react";
import { Picture } from "./Picture";

const MarryMe: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = useMemo(
    () => [
      "Aceita casar comigo?",
      "Marry me?",
      "¿Cásate conmigo?",
      "Sposami?",
      "나랑 결혼해?",
      "結婚してください？",
    ],
    []
  );

  useEffect(() => {
    setTimeout(() => {
      if (!texts[currentText + 1]) {
        setCurrentText(0);
      } else {
        setCurrentText(currentText + 1);
      }
    }, 8000);
  }, [currentText, texts]);

  return (
    <div className="w-full h-full max-w-7xl flex justify-evenly items-center flex-col transition-all duration-1000">
      <div className="hidden md:flex justify-evenly w-full">
        <Picture source="/euela1.jpeg" alt="Nos" />
        <Picture source="/nos.jpeg" alt="Nos" animate="animate-wiggleReverse" />
        <Picture source="/euela2.jpeg" alt="Nos" />
      </div>
      <h2 className="font-galada text-4xl md:text-7xl text-zinc-100 animate-fadeIn">
        {texts[currentText]}
      </h2>
      <div className="hidden md:flex justify-around w-full">
        <Picture
          source="/euela3.jpeg"
          alt="Nos"
          animate="animate-wiggleReverse"
        />
        <Picture source="/euela6.jpeg" alt="Nos" />
        <Picture
          source="/euela5.jpeg"
          alt="Nos"
          animate="animate-wiggleReverse"
        />
      </div>
    </div>
  );
};

export { MarryMe };
