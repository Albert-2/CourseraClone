import React from "react";

const AchievementCard = (props) => {
  return (
    <>
      <div
        className={`rounded-md bg-cover bg-right-bottom ${props.achievements.textCol} flex items-start justify-center space-y-14 px-4 py-14 flex-col w-full cursor-pointer `}
        style={{ backgroundImage: `url(${props.achievements.backImg})` }}
      >
        <div className="space-y-4 flex-1 ">
          <h1 className="font-semibold text-2xl">
            {props.achievements.heading}
          </h1>
          <h4>{props.achievements.subHeading}</h4>
        </div>
        <button className="font-bold text-sm flex items-start justify-center gap-2">
          {props.achievements.button}
          <svg
            aria-hidden="true"
            fill="none"
            focusable="false"
            height="20"
            viewBox="0 0 20 20"
            width="20"
            id="cds-react-aria-58"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.793 9.5L9.646 2.354l.708-.708L18.707 10l-8.353 8.354-.708-.707 7.147-7.147H2v-1h14.793z"
              fill="currentColor"
            ></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default AchievementCard;
