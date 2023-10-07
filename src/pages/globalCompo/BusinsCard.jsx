import React from "react";

const BusinsCard = (props) => {
  return (
    <>
      <div className="container m-auto flex items-stretch justify-center lg:flex-row flex-col gap-6 px-10">
        <div className="flex flex-col items-start justify-center space-y-6  flex-1">
          <h1 className="font-bold text-3xl">
            The ideal solution for your business
          </h1>
          <p className="text-sm">
            Get the world-class learning and development chosen by top
            organizations across the globe. All on Coursera for Business.
          </p>
          <button className="md:w-auto w-full py-3 px-8 text-white bg-blue-700 font-bold rounded-md">
            Discover Coursera for Business
          </button>
          <p className="text-sm">
            Upskill a small team?{" "}
            <u className="text-blue-700">Check out Coursera for Teams</u>
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-3 text-center flex-1 gap-6 py-6">
          {company.map((logo, logoIndex) => (
            <img
              src={logo}
              alt="logo"
              key={logoIndex}
              className="m-auto py-4"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BusinsCard;
