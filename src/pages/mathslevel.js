import React from "react";
import Maths from "../img/Math.png";
import { useNavigate } from "react-router-dom";
import Enginering from "../img/enginering.png";
import Science from "../img/Science.png";

import "../styles/mathslevel.scss";

export default function Mathslevel() {
  const navigate = useNavigate();
  function goMath48() {
    return navigate("/math48");
  }

  function goMath914() {
    return navigate("/math914");
  }

  function goMath15() {
    return navigate("/math15");
  }

  return (
    <div className="container_primary">
      <div className="container_secondary">
        <div className="container_item_1">
          <h1>Choose your Maths Level</h1>
        </div>
      </div>
      <div className="container_tertiary">
        <div className="container_item_2">
          <img onClick={goMath48} src={Maths} alt="Logo-Elearning" />
          <h3>Maths 4-8</h3>
        </div>
        <div className="container_item_3">
          <img onClick={goMath914} src={Enginering} alt="Logo-Elearning" />
          <h3>Maths 9-14</h3>
        </div>
        <div className="container_item_4">
          <img onClick={goMath15} src={Science} alt="Logo-Elearning" />
          <h3>Maths 15+</h3>
        </div>
      </div>
    </div>
  );
}
