import express from "express";
import {
  httpRegisterUser,
  httpLoginUser,
  httpLogoutUser,
  httpGetUser,
  httpUpdateUser,
} from "@/routes/auth/auth.controller";

const authRouter = express.Router();

authRouter.post("/signup", httpRegisterUser);
authRouter.post("/signin", httpLoginUser);
authRouter.get("/me", httpGetUser);
authRouter.put("/me", httpUpdateUser);
authRouter.post("/logout", httpLogoutUser);

export default authRouter;
