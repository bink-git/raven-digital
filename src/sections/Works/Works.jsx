import React from "react";
import Title from "../../components/Text/Title";
import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-5.jpg";

const Works = () => {
  return (
    <div className="about container-2xl mx-auto w-full max-w-screen-2xl ">
      <Title className="text-left">Our works</Title>
      <div className="grid grid-cols-12 gap-3">
        <img
          src={img1}
          alt=""
          className="col-span-3 h-full w-full rounded-lg"
        />
        <img
          src={img2}
          alt=""
          className="col-span-6 h-full w-full rounded-lg"
        />
        <img
          src={img3}
          alt=""
          className="col-span-3 h-full w-full rounded-lg"
        />
        <img
          src={img4}
          alt=""
          className="col-start-5 col-end-7 h-full w-full rounded-lg"
        />
        <img
          src={img5}
          alt=""
          className="col-span-5 h-full w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Works;
