import React from "react";

const CarSoln = (props) => {
  return (
    <div className=" flex items-center justify-center flex-col sm:w-[45%] w-full rounded-xl overflow-hidden ">
      <img src={props.content.image} alt="images" className="h-[40%] w-full" />
      <div className="px-2 py-8 flex flex-col item-left justify-center gap-4 bg-gray-100 ">
        <h1 className=" flex-1 md:text-base text-sm">
          {props.content.heading}
        </h1>
        <h4 className=" flex-1 font-semibold md:text-2xl text-xl">
          {props.content.subHeading}
        </h4>
        <p className=" flex-1 text-sm">{props.content.desc}</p>
        <a
          href="#"
          className=" flex-1 hover:underline hover:text-blue-800 text-blue-700"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default CarSoln;
