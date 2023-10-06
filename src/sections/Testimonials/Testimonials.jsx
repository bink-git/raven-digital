import React from "react";
import SwiperSlider from "./SwiperSlider";
import Title from "../../components/Title";

const Testimonials = () => {
  return (
    <div className="testimonials container-2xl relative mx-auto w-full max-w-screen-2xl py-32">
      <Title className="absolute left-1/3 z-10 ml-36 bg-[#0C1117] text-left">
        Testimonials
      </Title>
      <SwiperSlider />
    </div>
  );
};

export default Testimonials;
