import React, { useState } from "react";
// import plus from "../../assets/plus.svg";
// import xmark from "../../assets/xmark.svg";
// import "animate.css";

const Question = ({ qusestion, answer, id, toggle, activeId }) => {
  const isActive = id === activeId;

  return (
    <>
      <header
        onClick={() => toggle(id)}
        className="flex cursor-pointer justify-between gap-4 border-b-[3px] border-[#f2f2f2] py-4"
      >
        <h4
          className={
            isActive
              ? "text-md text-orange font-bold"
              : "text-md text-purple-dark font-bold"
          }
        >
          {qusestion}
        </h4>
        {/* <img src={isActive ? xmark : plus} alt="icon" /> */}
      </header>
      {isActive && (
        <>
          <p className="animate__animated animate__fadeIn answer text-purple-dark p-4 text-justify text-base">
            {answer}
          </p>
          <div className="border-b-[3px] border-[#f2f2f2]"></div>
        </>
      )}
    </>
  );
};

export default Question;
