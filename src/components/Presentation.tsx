import React, { useEffect, useState } from "react";

interface PresentationProps {
  nextStep: () => void;
}

const Presentation: React.FC<PresentationProps> = ({ nextStep }) => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
      setTimeout(() => {
        nextStep();
      }, 8000);
    }, 8000);
  }, [nextStep]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      {showText ? (
        <h1 className="font-galada text-4xl md:text-9xl text-zinc-300 animate-fadeIn">
          Para Luíza
        </h1>
      ) : (
        <h1 className="font-galada text-4xl md:text-9xl text-zinc-300 animate-fadeIn">
          De Junior
        </h1>
      )}
    </div>
  );
};

export { Presentation };
