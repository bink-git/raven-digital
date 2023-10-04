import React from "react";
import Button from "../../components/Buttons/Button";
import Title from "../../components/Text/Title";
import { cards } from "../../data";
import Card from "../../components/Card";

const About = () => {
  return (
    <section
      className="about container-2xl relative mx-auto mb-28 w-full max-w-screen-2xl "
      id="about"
    >
      <div className="about flex flex-col justify-center">
        <div className="">
          <Title>What we do</Title>

          <div className="grid grid-cols-12 gap-3">
            {cards.map((card) => (
              <Card key={card.icon} {...card} />
            ))}
            <div className="col-start-7 col-end-11 px-14 pt-14">
              <h3 className="mb-4 text-[32px] font-bold uppercase">
                Solutions for your bussiness
              </h3>
              <p className="mb-8 text-xl font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </p>
              <Button>Learn More</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
