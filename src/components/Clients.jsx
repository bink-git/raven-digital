import React from "react";
import Title from "./Title";
import mango from "../assets/mango.svg";
import microsoft from "../assets/microsoft.svg";
import nike from "../assets/nike.svg";
import amazon from "../assets/amazon.svg";

const Clients = () => {
  return (
    <div className="clients container-2xl mx-auto mb-[210px] w-full max-w-screen-2xl">
      <Title className="mb-6 text-left">Clients</Title>
      <div className="flex items-center justify-between">
        <img src={mango} alt="mango" />
        <img src={microsoft} alt="microsoft" />
        <img src={nike} alt="nike" />
        <img src={amazon} alt="amazon" />
        <img src={mango} alt="mango" />
        <img src={microsoft} alt="microsoft" />
        <img src={nike} alt="nike" />
      </div>
    </div>
  );
};

export default Clients;
