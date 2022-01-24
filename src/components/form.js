import React from "react";
import "../styles/form.scss";

export default function Form() {
  return (
    <form>
      <input className="email" type="email" placeholder="E-Mail" />
      <input className="password" type="password" placeholder="Password" />
      <button className="button" type="submit">
        LOGIN
      </button>
    </form>
  );
}
