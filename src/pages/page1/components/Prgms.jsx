import React from "react";

const Prgms = (props) => {
  return (
    <div className="flex items-start justify-center flex-col rounded-lg cursor-pointer border-2 sm:hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] overflow-hidden sm:min-w-[275px] min-w-full h-[400px]">
      <img
        src={props.detail.img}
        alt="image"
        className="w-full h-[50%] flex-1"
      />
      <div className="p-2 flex flex-col space-y-2 w-fit">
        <div className="flex items-center ">
          <img src={props.detail.logo} alt="icons" />
          <p className="text-sm ml-2">{props.detail.instit}</p>
        </div>
        <h1 className="font-bold text-xl">{props.detail.courseName}</h1>
        {props.detail.degreeIcon && (
          <p className="text-blue-700 text-sm">
            <i
              className="fa-solid fa-graduation-cap mr-2"
              style={{ color: "black" }}
            ></i>
            Earn a degree
          </p>
        )}
        <h1 className="text-sm">{props.detail.Degree}</h1>
      </div>
    </div>
  );
};

export default Prgms;
