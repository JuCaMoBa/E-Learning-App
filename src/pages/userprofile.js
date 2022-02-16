import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/userprofile.scss";
import iconImage from "../img/circleImage.png";

export default function Userprofile() {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/editprofile");
  }

  return (
    <div className="user">
      <div className="user__info">
        <h4 className="user__name">Pedro Perez</h4>
        <img className="user__image" src={iconImage} alt="" />
        <h6 className="user__email">Email:</h6>
        <h6 className="user__phone">Phone:</h6>
        <h6 className="user__country">Country:</h6>
        <div>
          <button onClick={handleClick} className="user__editprofile">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}
