import React from "react";
import "../styles/form.scss";

export default function Formsignup() {
  return (
    <form>
      <input className="firstname" type="text" placeholder="First Name" />
      <input className="lastname" type="text" placeholder="Last Name" />
      <input className="email" type="email" placeholder="E-Mail" />
      <input className="password" type="password" placeholder="Password" />
      <input
        className="confirmpassword"
        type="password"
        placeholder="Confirm Password"
      />
      <button className="button" type="submit">
        REGISTER
      </button>
    </form>
  );
}
