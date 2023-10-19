import React from "react";

const GlobHero = (props) => {
  return (
    <div className="relative">
      <div className="bg-[#f3f3f3] flex sm:h-[80vh] relative">
        <div className="flex h-full sm:flex-row flex-col items-stretch justify-center m-auto 2xl:px-60 md:gap-6">
          <div className="sm:space-y-20 space-y-8 overflow-y-scroll flex flex-col sm:w-[50%] w-full py-10 px-4">
            <div className="  items-center justify-start flex-col space-y-6">
              <h1 className="font-bold md:text-6xl text-3xl break-words">
                {props.heroInfo.head}
              </h1>
              {props.heroInfo.list ? (
                <ul className="flex flex-col items-start justify-start space-y-4 ">
                  {props.heroInfo.list.map((list, listIndex) => (
                    <li key={listIndex}>
                      <i
                        className="fa-solid fa-check fa-sm mx-2"
                        style={{ color: "#005eff" }}
                      ></i>
                      {list}
                    </li>
                  ))}
                </ul>
              ) : (
                <h2 className="text-lg">{props.heroInfo.subHead}</h2>
              )}
            </div>
            <div className=" flex items-start justify-start flex-col space-y-6">
              {!props.heroInfo.footer && (
                <div className=" flex flex-col items-start justify-start space-y-4">
                  <a
                    href="#"
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    Train your citizen workflow
                  </a>
                  <a
                    href="#"
                    className="text-blue-700 font-semibold hover:underline"
                  >
                    Upskill goverment employee
                  </a>
                </div>
              )}
              <button className="py-3 px-7 rounded-md text-base font-semibold bg-blue-700 text-white">
                {props.heroInfo.button}
              </button>
              <p>
                {props.heroInfo.footer}
                <span className="text-blue-500 underline">
                  {props.heroInfo.subFoot}
                </span>
              </p>
            </div>
          </div>
          <div className="md:w-[50%] h-full flex-1">
            <img
              src={props.heroInfo.image}
              alt="image"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* <div
        className="container max-w-[90%] mx-auto flex items-stretch justify-center sm:flex-row flex-col rounded-lg bg-black absolute top-[95%] text-white font-bold sm:py-10 py-0 px-4 sm:divide-x divide-x-0 sm:divide-y-0 divide-y"
        style={{
          left: "50%",
          transform: "translate(-50%, 0)",
        }}
      >
        {props.heroInfo.footContainer.map((info, infoIndex) => (
          <div className="flex justify-start items-center gap-2 sm:py-2 py-10 flex-1 px-6 " key={infoIndex}>
            <h1 className="text-3xl">{info.head}</h1>
            <p>{info.subHead}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default GlobHero;
