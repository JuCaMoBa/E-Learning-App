import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../store/context";
import { types } from "../types/types";
import iconImage from "../img/circleImage.png";
import "../styles/navbar.scss";
import { Cloudinary } from "@cloudinary/url-gen";
import { CLOUD_NAME } from "../api/consts";

function Navigation() {
  const { state, dispatch } = useContext(UserContext);
  const {
    state: { user },
  } = useContext(UserContext);

  const navigate = useNavigate();
  function toggle() {
    var x = document.getElementById("topnav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }

  function onSignOut() {
    dispatch({ type: types.signout });
    navigate("/");
  }

  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD_NAME,
    },
  });

  let image;
  !state.isLoggedIn ? (image = cld.image()) : (image = cld.image(user.photo));

  return !state.isLoggedIn ? (
    <div className="container">
      <div className="navbar" id="topnav">
        <Link className="link_home" to="/">
          HOME
        </Link>
        <Link className="link_singin" to="/modalsignin">
          SING IN
        </Link>
        <Link className="link_getstarted" to="/modalsignup">
          GET STARTED
        </Link>
      </div>
      <div className="icon" onClick={toggle}>
        <div className="icon_bar"></div>
        <div className="icon_bar"></div>
        <div className="icon_bar"></div>
      </div>
    </div>
  ) : (
    <div className="container">
      <div className="navbar" id="topnav">
        <Link className="link_home" to="/">
          HOME
        </Link>
        <Link className="link_singin" to="/userprofile">
          PROFILE
        </Link>
        <Link onClick={onSignOut} className="link_getstarted" to="/">
          SING OUT
        </Link>
      </div>
      <div className="icon" onClick={toggle}>
        {image.publicID ? (
          <img className="icon__profile" src={image.publicID} alt="" />
        ) : (
          <img className="icon__profile" src={iconImage} alt="" />
        )}
      </div>
    </div>
  );
}

export default Navigation;
