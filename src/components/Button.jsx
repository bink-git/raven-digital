import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ children, disabled, type, onClick, className }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={twMerge(
        "cursor-pointer rounded-full bg-primary px-6 py-2 text-lg font-normal text-white shadow-main transition duration-500 ease-in-out hover:bg-secondary",
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
