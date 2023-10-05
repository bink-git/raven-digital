import React from "react";

const Card = ({ icon, title, text }) => {
  return (
    <div className="group relative col-span-3 h-[345px] w-[350px] cursor-pointer overflow-hidden rounded bg-[#1B2837] px-6 pt-8">
      <div className="relative z-10">
        <p className="mb-8 text-2xl font-extrabold">{title}</p>
        <p className="mb-8 text-base font-normal">{text}</p>
        <a href="#" className="underline">
          Contact us
        </a>
      </div>
      <div className="top-50 absolute left-[60%] h-[548px] w-[548px] rounded-tl-[70px] bg-primary hover:ease-in-out group-hover:left-2 group-hover:top-[10%] group-hover:rounded-full group-hover:transition-[left] group-hover:duration-500"></div>
      <img
        src={icon}
        width={48}
        height={48}
        alt="icon"
        className="absolute bottom-5 right-10 z-10"
      />
    </div>
  );
};

export default Card;
