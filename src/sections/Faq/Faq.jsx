import React, { useState } from "react";
import { faqs } from "../../data.js";
import Title from "../../components/Title.jsx";

import Question from "./Question.jsx";

const Faq = () => {
  const [activeId, setActiveId] = useState(null);

  const toggle = (id) => {
    const newActiveId = id === activeId ? null : id;
    setActiveId(newActiveId);
  };

  return (
    <section className="faq container mx-auto mb-[210px] w-full" id="faq">
      <Title className="text-left">FAQ</Title>
      <div>
        {faqs.map((faq) => {
          return (
            <Question
              activeId={activeId}
              toggle={toggle}
              key={faq.id}
              {...faq}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
