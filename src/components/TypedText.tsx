import React from "react";
import ReactTyped from "react-typed";

interface TypedTextProps {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
}

const TypedText: React.FC<TypedTextProps> = ({
  strings,
  backSpeed = 100,
  typeSpeed = 100,
}) => {
  return (
    <ReactTyped
      className="text-zinc-200 text-7xl font-gemunu"
      strings={strings}
      typeSpeed={typeSpeed}
      backSpeed={backSpeed}
    />
  );
};

export { TypedText };
