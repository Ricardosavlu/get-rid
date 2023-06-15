import React from "react";
import "./Welcome.css";
import Logo from "../assets/getRid.svg";
import Sleeping from "../assets/sleeping.png";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="header-left">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="description">
          <div className="h1">
            <div>
              <span>Your </span>
              <span className="stroke-text"> next excuse</span>
            </div>
            <span> is here!!</span>
          </div>
          <div className="h2">
            <span>Get rid of events you don’t wanna go! </span>
            <span>Want to be at home watching </span>
            <span>movies? Maybe skip that cooper at 5</span>
            <span>am that you schedule with your</span>
            <span>active friend? We Can Help You!!</span>
          </div>
        </div>
      </div>

      <div className="header-right">
        <div className="images">
          <img src={Sleeping} alt="" className="sleep" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
