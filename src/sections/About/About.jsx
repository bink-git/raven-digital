import React from "react";
import Button from "../../components/Buttons/Button";
import Title from "../../components/Text/Title";
import { cards } from "../../data";
import Card from "../../components/Card";

const About = () => {
  return (
    <section
      className="about container-2xl relative mx-auto mb-10 w-full max-w-screen-2xl "
      id="about"
    >
      <div className="about flex flex-col justify-center lg:flex-row lg:gap-10">
        <div className="">
          <Title>What we do</Title>

          <div className="">
            {cards.map((card) => (
              <Card key={card.icon} {...card} />
            ))}
          </div>
          <Button>Learn More</Button>
        </div>
      </div>
    </section>
  );
};

export default About;
