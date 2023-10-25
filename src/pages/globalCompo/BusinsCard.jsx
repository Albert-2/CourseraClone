import React from "react";

const BusinsCard = (props) => {
  return (
    <>
      <div className="container m-auto sm:px-0 px-4 flex  sm:flex-row flex-col-reverse items-center justify-center z-10 py-20 gap-10">
        <div className="flex items-center justify-between flex-wrap text-center flex-1 gap-6 py-6">
          {props.content.companies ? (
            props.content.companies.map((logo, logoIndex) => (
              <div className="w-3/12 " key={logoIndex}>
                <img
                  src={logo}
                  alt="logo"
                  
                  className="m-auto object-cover "
                />
              </div>
            ))
          ) : (
            <img src={props.content.collage} alt="collages" />
          )}
        </div>
        <div className="flex items-center justify-center flex-1">
          <h1 className="font-semibold md:text-5xl text-3xl md:leading-tight">
            {props.content.heading}
          </h1>
        </div>
      </div>
    </>
  );
};

export default BusinsCard;
