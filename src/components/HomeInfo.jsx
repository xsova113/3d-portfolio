/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="text-center font-medium sm:text-xl">{text}</p>
    <Link className="neo-brutalism-white neo-btn" to={link}>
      {btnText}
      <img src={arrow} className="h-4 w-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="neo-brutalism-blue mx-5 px-8 py-4 text-center text-white sm:text-xl sm:leading-snug">
      Hi, I am <span className="font-semibold">George</span> 👋🏻
      <br />A software engineer from Canada.
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked with many companies and picked up many skills along the way"
      link={"/about"}
      btnText={"Learn more"}
    />
  ),
  3: (
    <InfoBox
      text="Led multiple prjects to success over the years. Curious about the impact?"
      link={"/project"}
      btnText={"Visit my portfolio"}
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link={"/contact"}
      btnText={"Let's talk"}
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
