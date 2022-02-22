import React, { useContext } from "react";
import Swal from "sweetalert2";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import UserContext from "../store/context";
import { useNavigate } from "react-router-dom";
import { types } from "../types/types";
import { userSignIn } from "../api/users";
import { SingInSchema } from "../formschemas/formschemas";
import "../styles/form.scss";

export default function Formsignin() {
  const { dispatch } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(SingInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const navigate = useNavigate();

  const formSubmit = async (dataForm) => {
    const { data } = await userSignIn({ ...dataForm });
    if (data) {
      dispatch({
        type: types.signin,
        payload: {
          user: { ...data },
          isLoggedIn: true,
        },
      });
      navigate("/mathslevel");
    } else {
      Swal.fire({
        title: "Error!",
        text: "No estas registrado",
        icon: "error",
        confirmButtonText: "Done",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)}>
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
      <button className="button" type="submit">
        LOGIN
      </button>
    </form>
  );
}
