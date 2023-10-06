import React from "react";
import { twMerge } from "tailwind-merge";

const Title = ({ children, className }) => {
  return (
    <h2
      className={twMerge("mb-20 text-center text-5xl font-medium", className)}
    >
      {children}
    </h2>
  );
};

export default Title;
