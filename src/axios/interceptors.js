import { env } from "@/configs/EnvironmentConfig";
import axios from "axios";

const instance = axios.create({
  baseURL: env.API_ENDPOINT,
  timeout: 60000,
});

instance.interceptors.request.use(
  function (config) {

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;