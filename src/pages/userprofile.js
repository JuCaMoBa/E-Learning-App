import React, { useContext } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { useNavigate } from "react-router-dom";
import UserContext from "../store/context";

import { CLOUD_NAME } from "../api/consts";
import "../styles/userprofile.scss";
import iconImage from "../img/circleImage.png";

export default function Userprofile() {
  const {
    state: { user },
  } = useContext(UserContext);

  const cld = new Cloudinary({
    cloud: {
      cloudName: CLOUD_NAME,
    },
  });

  const image = cld.image(user.photo);

  const navigate = useNavigate();
  function handleClick() {
    navigate("/modaleditprofile");
  }
  return (
    <div className="user">
      <div className="user__info">
        <h4 className="user__name">{`${user.firstName} ${user.lastName}`}</h4>
        {image.publicID ? (
          <img className="user__image" src={image.publicID} alt="" />
        ) : (
          <img className="user__image" src={iconImage} alt="" />
        )}
        <h6 className="user__email">{`Email: ${user.email}`} </h6>
        <h6 className="user__phone">
          {user.cellphone === null ? `Phone:` : `Phone: ${user.cellphone}`}
        </h6>
        <h6 className="user__country">{`Country: ${user.country}`}</h6>
        <div className="user__container__editprofile">
          <button onClick={handleClick} className="user__editprofile">
            Edit Profile
          </button>
        </div>
      </div>
      <div className="user__progress">
        <h4 className="user__progress__title">Your Progress</h4>
        <h6 className="user__progress__maths">Max Score in Maths: </h6>
        <h6 className="user__progress__history">Max Score in History: </h6>
        <h6 className="user__progress__sciencie">Max Score in Sciencie: </h6>
        <h6 className="user__progress__geography">Max Score in Geography: </h6>
      </div>
    </div>
  );
}
