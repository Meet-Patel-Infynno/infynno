import axios from "axios";

const interceptor = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Origin": "https://infynno-9h1kudqfc-meet-patel1501.vercel.app/",
  },
});

interceptor.interceptors.request.use(
  (config) => {
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
