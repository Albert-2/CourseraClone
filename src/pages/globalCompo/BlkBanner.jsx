import React from "react";

const BlkBanner = (props) => {
  return (
    <>
      <div className="py-20">
        <div className="container sm:w-[75%] w-[95%] m-auto bg-[#1f1f1f] text-white sm:text-center text-left px-2 space-y-20 sm:py-28 py-10 rounded-md">
          {/* <div className="container w-[75%] m-auto  bg-black text-white text-center skew-y-6"> */}
          <div className="space-y-8">
            <h1 className="sm:text-6xl text-3xl">{props.content.heading}</h1>
            <h4 className="sm:text-xl text-base">{props.content.subHeading}</h4>
          </div>
          <div className="space-y-8">
            <div className=" flex item-center sm:justify-center justify-start gap-4 font-bold">
              <button className="sm:px-6 px-2 sm:text-base text-sm py-2 rounded-md bg-blue-700 ">
                {props.content.btn1}
              </button>
              {props.content.btn2 && (
                <button className="border-2 border-white sm:px-6 px-2 sm:text-base text-sm py-2 rounded-md bg-transparent">
                  {props.content.btn2}
                </button>
              )}
            </div>
            {props.content.footer && (
              <p className="sm:text-sm text-base">
                {props.content.footer}
                <span className="text-blue-700 underline">
                  {" "}
                  {props.content.footerSpan}
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlkBanner;
