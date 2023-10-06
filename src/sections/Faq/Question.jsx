import React, { useState } from "react";
import arrowDown from "../../assets/arrow-down.svg";
import arrowUp from "../../assets/arrow-up.svg";

// import "animate.css";

const Question = ({ title, descr, id, toggle, activeId }) => {
  const isActive = id === activeId;

  return (
    <>
      <header
        onClick={() => toggle(id)}
        className={`flex cursor-pointer items-center justify-between rounded-[4px] bg-[#11161C] px-10 py-6 ${
          isActive ? "border-l-2 border-r-2 border-t-2 border-primary" : ""
        }`}
      >
        <h4 className={`text-2xl font-extrabold uppercase `}>{title}</h4>
        <img
          src={isActive ? arrowUp : arrowDown}
          alt="icon"
          className="h-5 w-5"
        />
      </header>
      {isActive && (
        <p className="answer border-b-2 border-l-2 border-r-2 border-primary bg-[#1B2837] px-10 py-6 text-base">
          {descr}
        </p>
      )}
    </>
  );
};

export default Question;
