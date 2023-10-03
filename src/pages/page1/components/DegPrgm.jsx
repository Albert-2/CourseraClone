import React from "react";
import Prgms from "./Prgms";

const DegPrgm = (props) => {
  return (
    <div className="container m-auto sm:py-10 py-2 px-4">
      <div className="space-y-4 flex flex-col items-start justify-center">
        <p className="font-semibold text-blue-900 text-lg">
          {props.prog.title}
        </p>
        <h1 className="font-semibold sm:text-5xl text-3xl">
          {props.prog.heading}
        </h1>
        <p className="sm:text-xl text-lg">{props.prog.subHeading}</p>
      </div>
      <div className="flex items-center justify-between sm:py-10 py-4 overflow-scroll gap-16">
        {props.prog.card.map((card, cardIndex) => (
          <Prgms detail={card} key={cardIndex} />
        ))}
      </div>
    </div>
  );
};

export default DegPrgm;
