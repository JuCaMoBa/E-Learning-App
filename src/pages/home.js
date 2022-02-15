import React from "react";
import Logoem from "../img/Logo em.png";

import "../styles/home.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__logo" src={Logoem} alt=""></img>
        <div className="home__content">
          <h2 className="header_1">LET'S LEARN EASY MATHS WITH EASY QUIZ</h2>
          <h3 className="header_2">
            For a better world teach our childs love for maths
          </h3>
        </div>
      </div>
    </div>
  );
}
