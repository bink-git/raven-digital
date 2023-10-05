import React from "react";

const Button = ({ children, disabled, type, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="cursor-pointer rounded-full bg-primary px-6 py-2 text-lg font-normal text-white shadow-main transition duration-500 ease-in-out hover:bg-secondary"
    >
      {children}
    </button>
  );
};

export default Button;
