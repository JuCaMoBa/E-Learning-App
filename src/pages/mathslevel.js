import React from "react";
import Maths from "../img/Math.png";
import Enginering from "../img/enginering.png";
import Science from "../img/Science.png";

import "../styles/mathslevel.scss";

export default function Mathslevel() {
  return (
    <div className="container_primary">
      <div className="container_secondary">
        <div className="container_item_1">
          <h1>Choose your Maths Level</h1>
        </div>
      </div>
      <div className="container_tertiary">
        <div className="container_item_2">
          <img src={Maths} alt="Logo-Elearning" />
          <h3>Maths 4-8</h3>
        </div>
        <div className="container_item_3">
          <img src={Enginering} alt="Logo-Elearning" />
          <h3>Maths 9-14</h3>
        </div>
        <div className="container_item_4">
          <img src={Science} alt="Logo-Elearning" />
          <h3>Maths 15+</h3>
        </div>
      </div>
    </div>
  );
}