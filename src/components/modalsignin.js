import React from "react";
import { Link } from "react-router-dom";
import "../styles/modal.scss";
import Formsignin from "./formsignin";

function Modalsignin() {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__top">
          <div className="modal__title">SIGN IN</div>
          <Link className="modal__close" to="/">
            <button type="button">
              <span>Close</span>
            </button>
          </Link>
        </div>
        <div className="modal__content">
          <Formsignin />
        </div>
      </div>
    </div>
  );
}

export default Modalsignin;
