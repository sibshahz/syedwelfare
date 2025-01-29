import express from "express";
import membersRouter from "@/routes/members/members.router";
import authRouter from "./auth/auth.router";
import { authenticate } from "./auth/auth.controller";
const api = express.Router();

// Middleware to check for x-user-id except for /hooks route
// api.use((req, res, next) => {
//   // Allow /hooks route without the 'x-user-id' check
//   if (req.path.startsWith('/hooks')) {
//     return next();
//   }

//   // Check for x-user-id header for other routes
//   if (!req.headers['x-user-id']) {
//     console.log("Unauthorized");
//     return res.status(401).json({ error: "Unauthorized" });
//   }

//   next();
// });

// Route handling
api.use("/members", membersRouter);
api.use("/auth", authRouter);
export default api;
