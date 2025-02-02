import { json, urlencoded } from "body-parser";
import express, {
  NextFunction,
  type Express,
  type Request,
  type Response,
} from "express";
import morgan from "morgan";
import cors from "cors";
import api from "@/routes/api";
import cookieParser from "cookie-parser";

export const createServer = (): Express => {
  const app = express();
  const allowedOrigins = [
    "http://localhost:3000",
    process.env.APP_URL || "http://localhost:3000",
  ];

  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(urlencoded({ extended: true }))
    .use(json({ limit: "10mb" }))
    .use(cookieParser())
    .use(
      cors({
        origin: allowedOrigins,
        credentials: true,
      })
    )
    .use("/v1", api)
    .use((error: any, req: Request, res: Response, next: NextFunction) => {
      console.error("***Error", error);
      res.status(500).send({ error: error.message });
    })
    .get("/message/:name", (req: Request, res: Response) => {
      res.json({ message: `hello world ${req.params.name}` });
    })
    .get("/status", (req: Request, res: Response) => {
      res.json({ ok: true });
    });

  return app;
};
