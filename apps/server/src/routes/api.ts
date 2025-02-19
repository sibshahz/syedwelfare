import express from "express";
import membersRouter from "@/routes/members/members.router";
import authRouter from "./auth/auth.router";
import { authenticate } from "./auth/auth.controller";
import donorsRouter from "./donors/donors.router";
import donationsRouter from "./donations/donations.router";
import paymentsRouter from "./payments/payments.router";
import backupRouter from "./backup/backup.router";
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
api.use("/payments", paymentsRouter);
api.use("/donors", donorsRouter);
api.use("/donations", donationsRouter);
api.use("/auth", authRouter);
api.use("/backup", backupRouter);
api.get("/params", (req, res) => {
  res.json({
    message: req.query,
  });
});
export default api;
