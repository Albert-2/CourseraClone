import React from "react";
import Prgms from "./Prgms";

const BusinsCard2 = (props) => {
  let dictn = props.content.flxDir ? "flex-row-reverse" : "flex-row";
  return (
    <>
      <div
        className={`flex md:${dictn} flex-col items-center justify-center gap-6 container m-auto sm:px-0 px-4 sm:py-14  py-10`}
      >
        <div className="flex flex-col items-start justify-center space-y-6 md:w-1/2 ">
          <h4 className="font-semibold text-lg">{props.content.heading}</h4>
          <h2 className="text-4xl font-bold">{props.content.subHead}</h2>
          <p className="text-xl">{props.content.listHead}</p>
          <ul className="list-none space-y-2">
            {props.content.list &&
              props.content.list.map((listItem, index) => (
                <li key={index}>
                  <i
                    className="fa-solid fa-check fa-sm mx-2"
                    style={{ color: "#005eff" }}
                  ></i>
                  {listItem}
                </li>
              ))}
          </ul>
          <a
            href="#"
            className="text-blue-700 underline font-bold flex items-center justify-center gap-2 "
          >
            {props.content.button}
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
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.793 9.5L9.646 2.354l.708-.708L18.707 10l-8.353 8.354-.708-.707 7.147-7.147H2v-1h14.793z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
          {props.content.feedback && (
            <>
              <p className="text-2xl">{props.content.feedback}</p>
              <div className="flex items-center justify-start gap-6 ">
                <img
                  src={props.content.compLogo}
                  alt="icon"
                  className="w-1/5 "
                />
                <div>
                  <h6 className="font-bold">{props.content.compEmp}</h6>
                  <p>{props.content.compName}</p>
                </div>
              </div>
            </>
          )}
        </div>
        <div className="md:w-1/2">
          {props.content.mainImg ? (
            <img
              src={props.content.mainImg}
              alt="images"
              className="rounded-md "
            />
          ) : props.content.VidCoverImage ? (
            <video
              src="https://videos.ctfassets.net/2pudprfttvy6/6b2EfyipwGqDqpB8zqJPDH/f9bb19fd48c78afff047e809b4b73c2d/courseramicrocred_09may23__720p_.mp4"
              typeof="video/mp4"
              controls
              className="md:w-4/5 text-left cursor-pointer hover:brightness-75"
              poster={props.content.VidCoverImage}
            ></video>
          ) : (
            <div>
              <Prgms />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BusinsCard2;
