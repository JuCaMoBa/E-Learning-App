import http from "./http";

export const getUserProfile = () =>
  http.get("/users/profile").then((response) => response.data);

export const updateUserProfile = (body) =>
  http.put("/users/profile", body).then((response) => response.data);

export const updateUserPhoto = (urlString) =>
  http
    .put("/users/profile/photo", { url: urlString })
    .then((response) => urlString);

export const createUserScore = (body) =>
  http.post("/maxscores", body).then((response) => response.data);

export const getUserScore = (id) =>
  http.get(`/maxscores/${id}`).then((response) => response.data);
