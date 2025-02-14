import {
  type Request,
  type Response,
  type NextFunction,
  type RequestHandler,
} from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { prisma } from "@repo/database";

const users = [];

const JWT_SECRET = process.env.JWT_SECRET;

export const httpRegisterUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log("***SIGNUP REQUEST", req.body);
  const hashedPassword = await bcrypt.hash(password, 10);
  const userExists = await prisma.user.findUnique({
    where: { email },
  });
  if (userExists) {
    return res
      .status(400)
      .send({ error: "User with this email already exists!" });
  }
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
  const token = jwt.sign(
    { email: user.email, role: user.role },
    JWT_SECRET as string,
    {
      expiresIn: "1h",
    }
  );
  // res.cookie("token", token, { httpOnly: true });
  res.cookie("token", token, { httpOnly: true, secure: true });
  return res.status(201).send({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
};

export const httpLoginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).send({ error: "Invalid credentials!" });
  }
  const token = jwt.sign(
    { email: user.email, role: user.role },
    JWT_SECRET as string,
    {
      expiresIn: "1h",
    }
  );
  res.cookie("token", token, { httpOnly: true, secure: true });
  res
    .status(200)
    .send({ id: user.id, name: user.name, email: user.email, role: user.role });
};

export const httpLogoutUser = async (req: Request, res: Response) => {
  res.clearCookie("token");
  res.status(200).send("Logged out!");
};
export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).send({ error: "Unauthorized" });
  try {
    const user = jwt.verify(token, JWT_SECRET as string);
    // req.user = user;
    if (user) {
      next();
    } else {
      res.clearCookie("token");
      res.status(403).send({ error: "Unauthorized" });
    }
    // next();
  } catch (err) {
    res.clearCookie("token");
    res.status(403).send({ error: "Invalid token" });
  }
};
