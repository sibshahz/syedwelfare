import express from "express";
import {
  httpGetBackup,
  httpMakeBackup,
  httpRestoreBackup,
  uploadBackup,
} from "./backup.controller";

const backupRouter = express.Router();

backupRouter.get("/make-backup", httpMakeBackup);
backupRouter.get("/get-backup", httpGetBackup);
backupRouter.post("/restore", uploadBackup, httpRestoreBackup);

export default backupRouter;
