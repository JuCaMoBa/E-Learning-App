import React from "react";
import "../styles/form.scss";

export default function Formsignin() {
  return (
    <form>
      <input className="e_mail" type="email" placeholder="E-Mail" />
      <input className="pass_word" type="password" placeholder="Password" />
      <button className="button" type="submit">
        LOGIN
      </button>
    </form>
  );
}
