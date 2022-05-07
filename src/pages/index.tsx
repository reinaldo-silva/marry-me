import type { NextPage } from "next";
import React, { ReactNode, useCallback, useState } from "react";
import { AboutUs } from "../components/AboutUs";
import { MarryMe } from "../components/MarryMe";
import { MusicPlayer } from "../components/MusicPlayer";
import { Play } from "../components/Play";
import { Presentation } from "../components/Presentation";

interface ContentVideoProps {
  children: ReactNode;
  currentStep: number;
}

const ContentVideo: React.FC<ContentVideoProps> = ({
  children,
  currentStep,
}) => {
  return (
    <div className="flex w-full h-full relative justify-start overflow-hidden transition-all duration-1000">
      <div
        className={`${
          currentStep === 3 ? "w-full" : "w-[calc(100%-500px)]"
        } transition duration-1000 flex justify-center`}
      >
        {children}
      </div>
      <div
        className={`w-[500px] min-w-[${
          currentStep === 2 ? "500px" : "0"
        }] h-[100vh] ${
          currentStep === 2 ? "translate-x-[0]" : "translate-x-[500px]"
        } transition-all duration-700 z-40 absolute top-0 right-0 opacity-${
          currentStep === 2 ? "100" : "0"
        }`}
      >
        <video
          className="videoTag absolute top-0 left-0 h-[100vh] w-full object-cover z-0"
          autoPlay
          loop
          muted
        >
          <source src="/nos.mp4" type="video/mp4" />
        </video>
        <div className="w-full h-full bg-zinc-400 z-20 absolute opacity-60" />
      </div>
    </div>
  );
};

const Home: NextPage = () => {
  const [steps, setSteps] = useState(0);

  const nextStep = useCallback(() => {
    setSteps(steps + 1);
  }, [steps]);

  return (
    <div className="bg-zinc-800 w-[100vw] h-[100vh]">
      {steps === 0 && <Play nextStep={nextStep} />}
      {steps === 1 && <Presentation nextStep={nextStep} />}
      {steps > 1 && (
        <ContentVideo currentStep={steps}>
          {steps === 2 && <AboutUs />}
          {steps === 3 && (
            <>
              <MarryMe />
              <button onClick={() => setSteps(1)}>next</button>
            </>
          )}
        </ContentVideo>
      )}
      <MusicPlayer onStart={steps > 0} setSteps={setSteps} />
    </div>
  );
};

export default Home;
