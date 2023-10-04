import React, { useState } from "react";

const FlippedCard = ({ frontContent, backContent }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className={`relative h-40 w-64 transform rounded-lg bg-white shadow-md ${
        isFlipped ? "rotate-y-180" : ""
      }`}
    >
      <div className="backface-hidden absolute h-full w-full">
        <div
          className={`front absolute h-full w-full transition duration-500 ease-in-out ${
            isFlipped ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex h-full w-full items-center justify-center p-4">
            <div onClick={flipCard} className="cursor-pointer">
              {frontContent}
            </div>
          </div>
        </div>

        <div
          className={`back rotate-y-180 absolute h-full w-full transition duration-500 ease-in-out ${
            isFlipped ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex h-full w-full items-center justify-center p-4">
            <div onClick={flipCard} className="cursor-pointer">
              {backContent}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippedCard;
