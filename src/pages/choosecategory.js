import React from "react";
import Maths from "../img/Math.png";
import { useNavigate } from "react-router-dom";
import Enginering from "../img/enginering.png";
import Science from "../img/Science.png";

import "../styles/mathslevel.scss";

export default function Choosecategory() {
  const navigate = useNavigate();
  function goMathlevel() {
    return navigate("/mathslevel");
  }

  return (
    <div className="container_primary">
      <div className="container_secondary">
        <div className="container_item_1">
          <h1>Choose your Category</h1>
        </div>
      </div>
      <div className="container_tertiary">
        <div className="container_item_2">
          <img onClick={goMathlevel} src={Maths} alt="Logo-Elearning" />
          <h3>Maths</h3>
        </div>
        <div className="container_item_3">
          <img src={Enginering} alt="Logo-Elearning" />
          <h3>History</h3>
        </div>
        <div className="container_item_4">
          <img src={Science} alt="Logo-Elearning" />
          <h3>Science</h3>
        </div>
      </div>
    </div>
  );
}