import React, { useContext } from "react";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import UserContext from "../store/context";
import { useNavigate } from "react-router-dom";
import { types } from "../types/types";
import { userSignUp } from "../api/users";
import { SingUpSchema } from "../formschemas/formschemas";
import "../styles/form.scss";

export default function Formsignup() {
  const { dispatch } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SingUpSchema),
    defaultValues: {
      confirmPassword: "",
      email: "",
      firstName: "",
      lastName: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const formSubmit = async (dataForm) => {
    const { data } = await userSignUp({ ...dataForm });
    if (data) {
      dispatch({
        type: types.signup,
        payload: {
          user: { ...data },
          isLoggedIn: true,
        },
      });
      navigate("/");
    } else {
      Swal.fire({
        title: "Error!",
        text: "Esta cuenta ya esta registrada",
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div>
        <input
          className="first_name"
          type="text"
          placeholder="First Name"
          {...register("firstName")}
        />
        <p>{errors.firstName?.message}</p>
      </div>
      <div>
        <input
          className="last_name"
          type="text"
          placeholder="Last Name"
          {...register("lastName")}
        />
        <p>{errors.lastName?.message}</p>
      </div>
      <div>
        <input
          className="e_mail"
          type="email"
          placeholder="E-Mail"
          {...register("email")}
        />
        <p> {errors.email?.message}</p>
      </div>
      <div>
        <input
          className="pass_word"
          type="password"
          placeholder="Password"
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
      </div>
      <div>
        <input
          className="confirm_password"
          type="password"
          placeholder="Confirm Password"
          {...register("confirmPassword")}
        />
        <p>{errors.confirmPassword?.message}</p>
      </div>
      <button className="button" type="submit">
        REGISTER
      </button>
    </form>
  );
}
