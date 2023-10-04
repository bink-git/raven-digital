import React from "react";
import { statistics } from "../data";

const Statistic = () => {
  return (
    <div className="bg-secondary">
      <div className="container-2xl container mx-auto flex justify-evenly gap-10 px-10 py-24">
        {statistics.map((statistic) => (
          <div
            key={statistic.number}
            className="flex max-w-[150px] flex-col gap-2"
          >
            <h3 className="text-5xl font-bold">{statistic.number}</h3>
            <p className="text-2xl font-bold uppercase text-[#8FC2FF]">
              {statistic.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistic;
