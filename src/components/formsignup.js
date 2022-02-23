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
      navigate("/mathslevel");
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
      <input
        {...register("firstName")}
        className="firstname"
        type="text"
        placeholder="First Name"
      />
      <p>{errors.firstName?.message}</p>
      <input
        {...register("lastName")}
        className="lastname"
        type="text"
        placeholder="Last Name"
      />
      <p>{errors.lastName?.message}</p>
      <input
        {...register("email")}
        className="email"
        type="email"
        placeholder="E-Mail"
      />
      <p> {errors.email?.message}</p>
      <input
        {...register("password")}
        className="password"
        type="password"
        placeholder="Password"
      />
      <p>{errors.password?.message}</p>
      <input
        {...register("confirmPassword")}
        className="confirmpassword"
        type="password"
        placeholder="Confirm Password"
      />
      <p>{errors.confirmPassword?.message}</p>
      <button className="button" type="submit">
        REGISTER
      </button>
    </form>
  );
}
