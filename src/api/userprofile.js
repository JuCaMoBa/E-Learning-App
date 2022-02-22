import axios from "axios";
import http from "./http";
import { getSession } from "./session";

export const getUserProfile = () =>
  http.get("/users/profile").then((response) => response.data);

export const updateUserProfile = (body) =>
  http.put("/users/profile", body).then((response) => response.data);

export const updateUserPhoto = (urlString) =>
  http
    .post("/users/profile/photo", { url: urlString })
    .then((response) => console.log("envio:", urlString));

// export const updateUserPhoto = (files) => {
//   const Token = getSession();
//   console.log("photo:", files);
//   var data = new FormData();
//   data.append("test", "test");
//   axios
//     .post(
//       `${process.env.REACT_APP_BASE_URL}/users/profile/photo`,
//       // { test: "test", files, data },
//       files,
//       {
//         headers: {
//           // "Content-Type": "multipart/form-data",
//           Authorization: Token,
//           // accept: "application/json",
//         },
//       }
//     )
//     .then((response) => response.data);

//   // fetch(`${process.env.REACT_APP_BASE_URL}/users/profile/photo`, {
//   //   method: "POST",
//   //   body: data,
//   // });

//   // axios({
//   //   method: "put",
//   //   url: `${process.env.REACT_APP_BASE_URL}/users/profile/photo`,
//   //   data,
//   //   config: {
//   //     headers: { "Content-Type": "multipart/form-data", Authorization: Token },
//   //   },
//   // });
// };
