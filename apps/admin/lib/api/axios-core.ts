import axios from "axios";

// const isServer = typeof window === "undefined";

export const axios_default = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    // 'authorization': `Bearer ${getAuthToken()}`,
    // 'X-User-Id' : await getUserId(),
  },
});

// axios_default.interceptors.request.use(async (config) => {
//   if (isServer) {
//     ("use server");
//     const { cookies } = await import("next/headers"),
//       user = cookies().get("user")?.value;

//     if (user) {
//       config.headers["X-User-Id"] = `${user}`;
//     }
//   } else {
//     ("use client");
//     const user = await getUserId();
//     // const user = document.cookie.replace(/(?:(?:^|.*;\s*)user\s*=\s*([^;]*).*$)|^.*$/, '$1')

//     if (user) {
//       config.headers["X-User-Id"] = `${user}`;
//     }
//   }

//   return config;
// });

export default axios_default;
