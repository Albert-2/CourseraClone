import React from "react";

const AchievementCard = (props) => {
  return (
    <>
      <div
        className={`rounded-md bg-cover bg-right-bottom ${props.achievements.textCol} flex items-start justify-center space-y-14 px-6 py-14 flex-col w-full cursor-pointer`}
        style={{ backgroundImage: `url(${props.achievements.backImg})` }}
      >
        <div className="space-y-4 flex-1">
          <h1 className="font-semibold text-2xl">
            {props.achievements.heading}
          </h1>
          <h4>{props.achievements.subHeading}</h4>
        </div>
        <button className="font-bold text-sm flex-1">
          {props.achievements.button}
        </button>
      </div>
    </>
  );
};

export default AchievementCard;
