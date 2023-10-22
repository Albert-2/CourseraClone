import React from "react";

const BlueBanner = (props) => {
  return (
    <>
      <div className="bg-blue-700 sm:p-20 p-8">
        <div className="container m-auto flex item-center justify-between md:flex-row flex-col md:gap-20 gap-10">
          <div className="flex flex-col item-center justify-start  text-white space-y-6 flex-1">
            <h1 className="font-bold sm:text-4xl text-3xl">
              {props.content.heading}
            </h1>
            <p className="sm:text-lg text-base">{props.content.subHeading}</p>
          </div>
          <div className="flex item-center justify-evenly flex-wrap md:flex-row flex-col  text-white flex-1 gap-6">
            {props.content.features.map((feature, index) => (
              <div
                className="flex items-start justify-start flex-col space-y-2 md:w-[40%]"
                key={index}
              >
                <img src={feature.icon} alt="icon" />
                <h1 className="text-xl font-semibold">{feature.heading}</h1>
                <p className="">{feature.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlueBanner;
