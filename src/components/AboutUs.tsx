import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { TypedText } from "./TypedText";

const AboutUs: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [step, setStep] = useState(1);

  const times1 = useMemo(() => [4000, 5000, 18000], []);

  useEffect(() => {
    setTimeout(() => {
      setCurrentText(currentText + 1);
      console.log(times1[currentText]);
      if (currentText === 2) setStep(step + 1);
    }, times1[currentText] | 1000);
  }, [currentText, times1, step]);

  return (
    <div className="w-full max-w-7xl flex flex-col justify-center p-6 gap-2">
      <span className="px-3 font-bold text-zinc-200 font-gemunu text-xl flex items-center gap-3">
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
        Junior
      </span>
      {step === 1 && (
        <>
          {currentText >= 1 && <TypedText strings={["Olá, Boa noite..."]} />}
          {currentText >= 2 && (
            <TypedText
              strings={[
                "Como não sou muito bom com palavras, achei melhor fazer algo em que eu fosse bom, portanto vou falar por meio de códigos 🙂",
              ]}
            />
          )}
        </>
      )}
    </div>
  );
};

export { AboutUs };
