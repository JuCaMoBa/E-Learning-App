import React from "react";
import Logoem from "../img/Logo em.png";
import { useNavigate } from "react-router-dom";

import "../styles/home.scss";

export default function Home() {
  const navigate = useNavigate();
  function handleClick() {
    return navigate("/mathslevel");
  }

  return (
    <div className="home">
      <div className="home__container">
        <img className="home__logo" src={Logoem} alt=""></img>
        <div className="home__content">
          <h2 className="header_1">LET'S LEARN EASY MATHS WITH EASY QUIZ</h2>
          <h3 className="header_2">
            For a better world teach our childs love for maths
          </h3>
          <h3 onClick={handleClick} className="header_3">
            Get Started with your Quiz
          </h3>
        </div>
      </div>
    </div>
  );
}
