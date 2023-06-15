import React, { useState } from "react";
import { menu } from "./datas/Menu";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/rightArrow.svg";
import Abstract from "../assets/abstract.svg";

import "../components/Menu.css";

function Menu() {
  const [selected, setSelected] = useState(0);
  const tLength = menu.length;

  return (
    <div className="menu-container">
      <div className="menu-header">
        <img src={Abstract} alt="" className="abstract" />
        <div className="text">
          <div className="title">
            <span>Things to do</span>
            <span>
              after
              <span className="stroke-text"> get rid</span>
            </span>
          </div>
          <div className="menu-description">
            <span>How to enjoy your free time? </span>
            <span>We have some tips for you!</span>
          </div>
        </div>
      </div>
      <hr />
      <div className="menu-options">
        <img src={menu[selected]?.image} alt="menu-image" />
        <span>{menu[selected]?.descriprion}</span>
      </div>
      <div className="arrows">
        <img
          className="arrow-img"
          onClick={() => {
            selected === 0
              ? setSelected(tLength - 1)
              : setSelected((prev) => prev - 1);
          }}
          src={leftArrow}
          alt=""
        />

        <img
          onClick={() => {
            selected === tLength - 1
              ? setSelected(0)
              : setSelected((prev) => prev + 1);
          }}
          src={rightArrow}
          alt=""
        />
      </div>
    </div>
  );
}

export default Menu;
