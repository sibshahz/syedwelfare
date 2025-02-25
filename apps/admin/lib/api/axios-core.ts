import axios from "axios";

const isServer = typeof window === "undefined";

export const axios_default = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true, // Ensures cookies are sent with requests
  headers: {
    "Content-Type": "application/json",
  },
});

axios_default.interceptors.request.use(async (config) => {
  if (isServer) {
    // Server-side: Attach cookies from request headers
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { cookies } = require("next/headers");
    const cookieStore = cookies();

    if (cookieStore) {
      config.headers.Cookie = await cookieStore
        .getAll()
        .map(({ name, value }) => `${name}=${value}`)
        .join("; ");
    }
  } else {
    // Client-side: Attach cookies from document.cookie
    if (document.cookie) {
      config.headers.Cookie = document.cookie;
    }
  }

  return config;
});

export default axios_default;
