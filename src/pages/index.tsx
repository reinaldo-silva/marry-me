import type { NextPage } from "next";
import { useState } from "react";
import MusicPlayer from "../components/MusicPlayer";
import { Play } from "../components/Play";

const Home: NextPage = () => {
  const [steps, setSteps] = useState(0);

  const nextStep = () => {
    setSteps(steps + 1);
  };

  return (
    <div className="bg-zinc-800 w-full h-[100vh]">
      {steps === 0 && <Play nextStep={nextStep} />}
      <MusicPlayer onStart={steps > 0} />
    </div>
  );
};

export default Home;
