import express from "express";
import {
  httpRegisterUser,
  httpLoginUser,
  httpLogoutUser,
} from "@/routes/auth/auth.controller";

const authRouter = express.Router();

authRouter.post("/signup", httpRegisterUser);
authRouter.post("/signin", httpLoginUser);
authRouter.post("/logout", httpLogoutUser);

export default authRouter;
