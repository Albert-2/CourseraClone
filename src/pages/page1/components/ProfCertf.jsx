import React from "react";

const ProfCertf = (props) => {
  return (
    <div className="flex rounded-md overflow-hidden flex-col h-fit shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] md:hover:scale-105 sm:cursor-pointer  md:w-[300px] w-full  transition">
      <img
        src={props.course.image}
        alt="images"
        className="h-[200px] w-full  object-center"
      />
      <div className="flex flex-col gap-2 text-sm py-4 px-2">
        <div>
          <img
            src={props.course.icon}
            alt="icon"
            className="inline mr-4 w-[25px]"
          />
          {props.course.company}
        </div>
        <h1 className="font-bold">{props.course.name}</h1>
        <p>{props.course.skill}</p>
        <p>4.8(87.9k reviews)</p>
        <p>Beginner · Professional Certificate · 6 months</p>
      </div>
    </div>
  );
};

export default ProfCertf;
