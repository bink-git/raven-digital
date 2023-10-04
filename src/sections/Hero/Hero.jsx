import React from "react";
import Button from "../../components//Buttons/Button";
import heroImg from "../../assets/hero-img.png";
import Header from "./Header";

const Hero = () => {
  return (
    <section className="hero bg-hero-bg h-full">
      <Header />
      <div className="info mx-auto grid w-full grid-cols-12 gap-x-[88px] pb-44 pt-36">
        <div className="col-span-6  pl-[238px] pt-12">
          <h1 className="mb-7 text-[85px] font-bold leading-tight">
            WE ARE <br /> DIGITAL AGENCY
          </h1>
          <p className="mb-14 text-xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id
            fringilla turpis tempor enim. Vel tristique suspendisse eget sodales
            egestas. Donec duis lacus, odio velit eu eget ac tortor. Ac sit
            ultricies hendrerit pellentesque arcu fames sit lectus. Scelerisque
            id bibendum velit cras.
          </p>
          <Button>Learn More</Button>
        </div>

        <div className="main-img col-span-6 h-full w-full">
          <img src={heroImg} className="w-full" alt="main img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
