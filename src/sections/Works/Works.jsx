import React from "react";
import Title from "../../components/Text/Title";
import img1 from "../../assets/images/img-1.jpg";
import img2 from "../../assets/images/img-2.jpg";
import img3 from "../../assets/images/img-3.jpg";
import img4 from "../../assets/images/img-4.jpg";
import img5 from "../../assets/images/img-5.jpg";
import Button from "../../components/Buttons/Button";

const Works = () => {
  return (
    <div className="about container-2xl mx-auto w-full max-w-screen-2xl ">
      <Title className="text-left">Our works</Title>
      <div className="mb-[230px] grid grid-cols-12 gap-3">
        <img
          src={img1}
          alt="photo"
          className="col-span-3 h-full w-full rounded-lg"
        />
        <img
          src={img2}
          alt="photo"
          className="col-span-6 h-full w-full rounded-lg"
        />
        <img
          src={img3}
          alt="photo"
          className="col-span-3 h-full w-full rounded-lg"
        />
        <div className="col-span-3 pt-5">
          <h3 className="mb-4 text-[32px] font-bold uppercase">
            not impressed?
          </h3>
          <p className="mb-8 text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <Button>See More</Button>
        </div>
        <img
          src={img4}
          alt="photo"
          className="col-start-4 col-end-7 h-full w-full rounded-lg"
        />
        <img
          src={img5}
          alt="photo"
          className="col-span-6 h-full w-full rounded-lg"
        />
      </div>
    </div>
  );
};

export default Works;
