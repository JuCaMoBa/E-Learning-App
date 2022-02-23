import React, { useContext } from "react";
import Maths from "../img/Math.png";
import { useNavigate } from "react-router-dom";
import history from "../img/history.png";
import Science from "../img/Science.png";
import geography from "../img/geography.png";
import { types } from "../types/types";
import UserContext from "../store/context";

import "../styles/mathslevel.scss";

export default function Choosecategory() {
  const { dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  function goMathlevel() {
    return navigate("/maths");
  }
  function goTriviaHistory() {
    dispatch({
      type: types.trivia,
      payload: {
        category: "history",
      },
    });
    return navigate("/trivia");
  }

  function goTriviaGeography() {
    dispatch({
      type: types.trivia,
      payload: {
        category: "geography",
      },
    });
    return navigate("/trivia");
  }

  function goTriviaScience() {
    dispatch({
      type: types.trivia,
      payload: {
        category: "science",
      },
    });
    return navigate("/trivia");
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
          <img onClick={goTriviaHistory} src={history} alt="Logo-Elearning" />
          <h3>History</h3>
        </div>
        <div className="container_item_4">
          <img onClick={goTriviaScience} src={Science} alt="Logo-Elearning" />
          <h3>Science</h3>
        </div>
        <div className="container_item_5">
          <img
            onClick={goTriviaGeography}
            src={geography}
            alt="Logo-Elearning"
          />
          <h3>Geography</h3>
        </div>
      </div>
    </div>
  );
}
