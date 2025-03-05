import React from "react";
import { Link } from "react-router-dom";
import githubLogo from "../assets/github-mark.svg";

const InfoBox = ({ text, bold, link, btnText }) => (
  <div className="sm:text-xl w-96 min-w-fit px-8 py-4 bg-white border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] grid place-content-center text-center">
    <div className="flex min-w-10 max-w-max items-center justify-center space-x-4">
      <p className="min-w-min w-full">
        {text}
        {bold ? <span className="min-w-min font-bold">{bold}</span> : null}
      </p>
      {link && btnText
        ? (
          <div className="flex space-x-2 mx-auto w-fit">
            <button
              type="button"
              className="flex items-center max-w-fit border-black border-2 px-2.5 py-1.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] rounded-md"
            >
              <Link
                to={link}
                target="_blank"
                className="flex items-center justify-center ml-1"
              >
                {btnText}
                {btnText === "GitHub"
                  ? (
                    <img
                      src={githubLogo}
                      alt="GitHub Logo"
                      className="ml-2 h-6 w-6 mx-1"
                    />
                  )
                  : null}
              </Link>
            </button>
          </div>
        )
        : null}
    </div>
  </div>
);

const renderContent = {
  1: (
    <InfoBox
      text="Hello I am "
      bold="Bedirhan 👋"
      link="/about"
      btnText="About"
    />
  ),
  2: (
    <InfoBox
      text="Worked on many projects and gained experience"
      link="https://github.com/MrBabylonian"
      btnText="GitHub"
    />
  ),
  3: (
    <InfoBox
      text="Don't hesitate to contact me"
      link="/contact"
      btnText="Contact"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
