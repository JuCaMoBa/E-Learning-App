import React from "react";
import { Link } from "react-router-dom";
import Formsignup from "./formsignup";

function Modalsignup() {
  return (
    <div className="modal">
      <div className="modal__container">
        <div className="modal__top">
          <div className="modal__title">REGISTER</div>
          <Link className="modal__close" to="/">
            <button type="button">
              <span>Close</span>
            </button>
          </Link>
        </div>
        <div className="modal__content">
          <Formsignup />
        </div>
      </div>
    </div>
  );
}

export default Modalsignup;
