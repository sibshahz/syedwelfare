import express from "express";
import { httpGetBackup, httpMakeBackup } from "./backup.controller";

const backupRouter = express.Router();

backupRouter.get("/make-backup", httpMakeBackup);
backupRouter.get("/get-backup", httpGetBackup);

export default backupRouter;
