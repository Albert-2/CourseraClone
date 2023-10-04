import React from "react";
import Prgms from "./Prgms";
import MyCont from "../../MyCont";
import { useContext } from "react";

const DegPrgm = () => {
  const prog = useContext(MyCont);
  return (
    <div className="container m-auto sm:py-10 py-2 px-4">
      <div className="space-y-4 flex flex-col items-start justify-center">
        <p className="font-semibold text-blue-900 text-lg">{prog.title}</p>
        <h1 className="font-semibold sm:text-5xl text-3xl">{prog.heading}</h1>
        <p className="sm:text-xl text-lg">{prog.subHeading}</p>
      </div>
      <div className="flex items-center justify-between sm:py-10 py-4 overflow-scroll gap-16">
        {prog.card.map((card, cardIndex) => (
          <Prgms detail={card} key={cardIndex} />
        ))}
      </div>
      <p className="text-blue-700 sm:font-semibold font-bold text-sm text-center pt-10">Explore Free Courses</p>
    </div>
  );
};

export default DegPrgm;
