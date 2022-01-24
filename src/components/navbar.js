import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

function Navigation() {
  function toggle() {
    var x = document.getElementById("topnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
    console.log(x.className);
  }

  return (
    <div className="container">
      <div className="navbar" id="topnav">
        <Link className="link_home" to="/">
          HOME
        </Link>
        <Link className="link_about" to="/about">
          ABOUT
        </Link>
        <Link className="link_contact" to="/contact">
          CONTACT
        </Link>
        <Link className="link_singin" to="/modalsignin">
          SING IN
        </Link>
        <Link className="link_getstarted" to="/contact">
          GET STARTED
        </Link>
      </div>
      <div className="icon" onClick={toggle}>
        <div className="icon_bar"></div>
        <div className="icon_bar"></div>
        <div className="icon_bar"></div>
      </div>
    </div>
  );
}

export default Navigation;
