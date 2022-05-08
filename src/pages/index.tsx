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
    <div className="flex w-full h-full relative justify-start overflow-hidden transition-all duration-2000">
      <div
        className={`w-full ${
          currentStep === 3 ? "md:w-full" : "md:w-[calc(100%-500px)]"
        } transition-all duration-1000 flex justify-center z-30`}
      >
        {children}
      </div>
      <div
        className={`${
          currentStep === 3 ? "w-[100vw]" : "w-[500px]"
        } h-[100vh] z-10 absolute top-0 right-0 transition-all duration-1000`}
      >
        <video
          className="videoTag h-full w-full object-cover transition-all duration-1000"
          autoPlay
          loop
          muted
        >
          <source src="/nos2.mp4" type="video/mp4" />
        </video>
        <div
          className={`w-full h-full bg-zinc-700 z-20 absolute top-0 right-0 opacity-80 ${
            currentStep === 3 ? "md:opacity-80" : "md:opacity-30"
          }`}
        />
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
          {steps === 2 && <AboutUs nextStep={nextStep} />}
          {steps === 3 && <MarryMe />}
        </ContentVideo>
      )}
      <MusicPlayer onStart={steps > 0} setSteps={setSteps} />
    </div>
  );
};

export default Home;
