import { CircleNotch } from "phosphor-react";
import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
      <CircleNotch weight="bold" className="w-6 h-6 animate-spin" />
    </div>
  );
};

export { Loading };
