import axios from "axios";

const isServer = typeof window === "undefined";

export const axios_default = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axios_default.interceptors.request.use(async (config) => {
  if (isServer) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ("use server");
    config.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ("use client");
    config.baseURL = "http://localhost:8080/v1/";
  }

  return config;
});

export default axios_default;
