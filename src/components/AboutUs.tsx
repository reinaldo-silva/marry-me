import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { TypedText } from "./TypedText";

interface AboutUsProps {
  nextStep: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ nextStep }) => {
  useEffect(() => {
    setTimeout(() => {
      nextStep();
    }, 3000);
  }, [nextStep]);

  return (
    <div className="w-full max-w-7xl flex flex-col justify-start p-2 md:p-6 gap-2">
      <span className="h-[20vh] md:h-[30vh] w-full px-3 font-bold text-zinc-200 font-gemunu text-xl flex items-center gap-3">
        <div className="w-14 h-14">
          <Image
            src="/eu.jpeg"
            alt="Eu de óculos"
            height="220px"
            width="200px"
            objectFit="cover"
            className="rounded-full  shadow-md"
          />
        </div>
        <div>
          Junior
          <p className="text-md opacity-80 animate-pulse">Está digitando...</p>
        </div>
      </span>
      <div className="h-[80vh] md:h-[70vh] pb-4 flex flex-col gap-7 px-2">
        <TypedText
          strings={[
            " ",
            " ",
            " ",
            "Olá, Boa noite...",
            "Como não sou muito bom com palavras, achei melhor fazer algo em que eu fosse bom, portanto vou falar por meio de códigos e programação 🙂",
            "",
          ]}
        />
      </div>
    </div>
  );
};

export { AboutUs };
