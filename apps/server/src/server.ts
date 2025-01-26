import { json, urlencoded } from "body-parser";
import express, { type Express, type Request, type Response } from "express";
import morgan from "morgan";
import cors from "cors";

export const createServer = (): Express => {
  const app = express();

  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json())
    .use(
      cors({
        origin: process.env.APP_URL || "http://localhost:3000",
        credentials: true,
      })
    )
    .get("/message/:name", (req: Request, res: Response) => {
      res.json({ message: `hello world ${req.params.name}` });
    })
    .get("/status", (req: Request, res: Response) => {
      res.json({ ok: true });
    });

  return app;
};
