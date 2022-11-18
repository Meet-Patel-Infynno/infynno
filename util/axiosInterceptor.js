import axios from "axios";
import { getUserToken } from "./user";
const interceptor = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

interceptor.interceptors.request.use(
  (config) => {
    const token = getUserToken();
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

interceptor.interceptors.response.use((res) => {
  return res;
});

export default interceptor;
