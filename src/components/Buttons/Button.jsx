import React from "react";

const Button = ({ children, disabled, type, onClick }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className="bg-primary shadow-main cursor-pointer rounded-full px-6 py-2 text-lg font-normal text-white transition"
    >
      {children}
    </button>
  );
};

export default Button;
