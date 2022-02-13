import axios from "axios";
import { BASE_URL } from "./consts";
import { getSession } from "./session";

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = getSession();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) =>
    // Do something with request error
    Promise.reject(error)
);

export default instance;
