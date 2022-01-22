import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.scss";

function Navigation() {
  return (
    <div className="navbar">
      <Link className="link" to="/">
        HOME
      </Link>
      <Link className="link" to="/about">
        ABOUT
      </Link>
      <Link className="link" to="/contact">
        CONTACT
      </Link>
    </div>
  );
}

export default Navigation;
