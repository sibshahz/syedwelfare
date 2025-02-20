import axios from "axios";

const isServer = typeof window === "undefined";

export const axios_default = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true, // Ensures cookies are sent with requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor to modify the request
axios_default.interceptors.request.use(async (config) => {
  if (isServer) {
    // Manually attach cookies from the incoming request
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const cookies = require("next/headers").cookies;
    const cookieString = cookies().toString();

    if (cookieString) {
      config.headers.Cookie = cookieString;
    }

    config.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  } else {
    config.baseURL = "http://localhost:8080/v1/"; // Adjust for client-side requests
  }

  return config;
});

export default axios_default;
