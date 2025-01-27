import express from "express";
import { httpRegisterUser, httpLoginUser } from "@/routes/auth/auth.controller";

const authRouter = express.Router();

authRouter.post("/signup", httpRegisterUser);
authRouter.post("/signin", httpLoginUser);

export default authRouter;
