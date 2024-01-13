import React from "react";

const Prgms = (props) => {
  return (
    <div className=" flex items-start justify-center flex-col rounded-lg cursor-pointer border-2 sm:hover:shadow-[rgba(100,100,111,0.2)_0px_7px_29px_0px] overflow-hidden h-[400px] bg-white sm:min-w-[275px] min-w-full">
      <img src={props.detail.img} alt="image" className="w-full h-[50%]" />
      <div className="text-sm px-2 py-4 flex flex-col items-start justify-between space-y-2 w-fit flex-1">
        <div className="flex items-center ">
          {props.detail.logo ? (
            <img src={props.detail.logo} alt="icons" />
          ) : (
            <p className="font-bold">{props.detail.academy}</p>
          )}
          <p className=" ml-2">{props.detail.instit}</p>
        </div>
        {props.detail.courseName ? (
          <h1 className="font-bold text-xl">{props.detail.courseName}</h1>
        ) : (
          <p>{props.detail.courseDet}</p>
        )}
        {props.detail.degreeIcon ? (
          <p className="text-blue-700">
            <i
              className="fa-solid fa-graduation-cap mr-2"
              style={{ color: "black" }}
            ></i>
            Earn a degree
          </p>
        ) : (
          <div className="inline-flexStyle space-x-2">
            <h1>
              <span className="font-bold">{props.detail.rating}</span>
            </h1>
            <p>({props.detail.reviews}k course reviews) </p>
          </div>
        )}
        {props.detail.Degree ? (
          <h1>{props.detail.Degree}</h1>
        ) : (
          <button className="text-blue-700 underline w-fit">Learn more</button>
        )}
      </div>
    </div>
  );
};

export default Prgms;
