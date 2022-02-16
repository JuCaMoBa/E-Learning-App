import React from "react";
import { Link } from "react-router-dom";
import "../styles/modal.scss";
import Editprofile from "./formeditprofile";

function Modaleditprofile() {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__top">
          <div className="modal__title">EDIT PROFILE</div>
          <Link className="modal__close" to="/userprofile">
            <button type="button">
              <span>Close</span>
            </button>
          </Link>
        </div>
        <div className="modal__content">
          <Editprofile />
        </div>
      </div>
    </div>
  );
}

export default Modaleditprofile;
