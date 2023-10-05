import React, { useState, useEffect, useRef } from "react";
import { statistics } from "../data";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Statistic = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="mb-32 bg-secondary ">
      <div className="container-2xl container mx-auto flex justify-between gap-10 px-16 py-24">
        {statistics.map((statistic) => (
          <div
            key={statistic.number}
            className="flex max-w-[140px] flex-col gap-2"
          >
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <h3 className="text-center text-5xl font-bold">
                {counterOn && (
                  <CountUp
                    start={0}
                    end={statistic.number}
                    duration={3}
                    separator=" "
                  />
                )}
              </h3>
            </ScrollTrigger>
            <p className="text-center text-2xl font-bold uppercase text-[#8FC2FF]">
              {statistic.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistic;
