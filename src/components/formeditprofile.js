import React, { useState } from "react";
import { useProfile } from "../hooks/useProfile";
import { useNavigate } from "react-router-dom";
import { updateUserPhoto } from "../api/userprofile";
import axios from "axios";

export default function Editprofile() {
  const {
    actions: { update },
  } = useProfile();

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    country: "",
    cellphone: "",
  });

  const fileHandler = ({ target }) => {
    const file = target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");
    axios
      .post("https://api.cloudinary.com/v1_1/dyia2dpqy/image/upload", formData)
      .then((response) => updateUserPhoto(response.data.secure_url));
  };

  const handleInputChange = ({ target }) => {
    setInputs({ ...inputs, [target.name]: target.value });
  };

  console.log(inputs);

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    await update(inputs);
    navigate("/userprofile");
  };

  return (
    <div className="edit__profile_form">
      <form onSubmit={handleSubmit}>
        <input
          className="firstame"
          name="firstName"
          placeholder="First Name"
          type="text"
          onChange={handleInputChange}
        />
        <input
          className="lastname"
          name="lastName"
          placeholder="Last Name"
          type="text"
          onChange={handleInputChange}
        />
        <input
          className="cellphone"
          name="cellphone"
          placeholder="Phone"
          type="number"
          onChange={handleInputChange}
        />
        <input
          className="country"
          name="country"
          placeholder="country"
          type="text"
          onChange={handleInputChange}
        />
        <p>Choose your Photo</p>
        <input
          accept=".jpg,.jpeg,.png"
          className="fileimage"
          name="file"
          type="file"
          onChange={fileHandler}
        />
        <button className="button" type="submit">
          UPDATE
        </button>
      </form>
    </div>
  );
}
