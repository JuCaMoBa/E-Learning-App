import React from "react";

export default function Editprofile() {
  return (
    <div className="edit__profile_form">
      <form>
        <input className="firstname" placeholder="First Name" type="text" />
        <input className="lastname" placeholder="Last Name" type="text" />
        <input className="phone" placeholder="Phone" type="text" />
        <input className="country" placeholder="country" type="text" />
        <p>Choose your Photo</p>
        <input className="fileimage" name="filename" type="file" />
        <button className="button" type="submit">
          UPDATE
        </button>
      </form>
    </div>
  );
}
