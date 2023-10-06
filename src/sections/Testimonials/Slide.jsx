import React from "react";

const Slide = ({ path }) => {
  return (
    <div className="flex items-center gap-20">
      <img
        src={path}
        alt="slide photo"
        className="h-[520px] max-w-[550px] rounded-tr-[90px] object-cover "
      />

      <div className="slide-content relative max-w-[660px]">
        <p className="text-2xl font-medium">Jane Doe</p>
        <p className="mb-4 text-2xl font-medium text-[#727272]">
          Company / CEO
        </p>
        <p className="text-xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit id
          fringilla turpis tempor enim. Vel tristique suspendisse eget sodales
          egestas. Donec duis lacus, odio velit eu eget ac tortor. Ac sit
          ultricies hendrerit pellentesque arcu fames sit lectus. Scelerisque id
          bibendum velit cras.
        </p>
      </div>
    </div>
  );
};

export default Slide;
