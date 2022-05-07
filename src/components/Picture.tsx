import Image from "next/image";
import React from "react";

interface PictureProps {
  source: string;
  alt: string;
  animate?: "animate-wiggle" | "animate-wiggleReverse";
}

const Picture: React.FC<PictureProps> = ({
  source,
  alt,
  animate = "animate-wiggle",
}) => {
  return (
    <div
      className={`flex p-2 bg-zinc-300 flex-col shadow-lg rounded-sm ${animate}`}
    >
      <Image
        src={source}
        alt={alt}
        height="220px"
        width="200px"
        objectFit="cover"
      />
      <div className="h-7 -full" />
    </div>
  );
};

export { Picture };
