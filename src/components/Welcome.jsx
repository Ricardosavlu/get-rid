import React from "react";
import "./Welcome.css";
import Logo from "../assets/getRid.svg";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <div className="logo">
        <img src={Logo} alt="" />
      </div>

      <div className="header">
        <span>Get rid of events you don’t wanna go!</span>
        <span>
          Want to be at home watching movies? <br /> Or do you want to avoid
          some boring people reunion? <br /> Maybe skip that run at 5 am that
          you schedule with your active friend?
        </span>
        <span>We Can Help You!!!</span>
      </div>
    </div>
  );
};

export default Welcome;
