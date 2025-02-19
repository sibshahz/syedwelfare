import { type Request, type Response, type NextFunction } from "express";
import { exec, spawn } from "child_process";
import path from "path";
import fs from "fs";
import multer from "multer";
import "dotenv/config";

// Define a backup directory
const BACKUP_DIR = path.join(__dirname, "../../../backups");

// Ensure backup directory exists
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
}

const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  container: process.env.DB_CONTAINER,
};

export const httpMakeBackup = (req: Request, res: Response) => {
  try {
    const timestamp = new Date().toISOString().replace(/[-T:.]/g, "_");
    const backupFile = `backup_${timestamp}.sql`;
    const backupPath = path.join(BACKUP_DIR, backupFile);

    // Construct the pg_dump command
    // const command = `PGPASSWORD="${dbConfig.password}" pg_dump -h ${dbConfig.host} -p ${dbConfig.port} -U ${dbConfig.user} -F c -b -v -f ${backupPath} ${dbConfig.database}`;
    const command = `docker exec ${dbConfig.container} pg_dump -U mysecretuser -d syedwelfare > ${backupPath}`;
    // Execute the command
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error("Error creating backup:", error);
        res.status(500).json({ message: "Backup failed", error });
        return;
      }

      console.log("Backup created:", backupPath);
      res.json({ message: "Backup successful", backupFile });
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const httpGetBackup = (req: Request, res: Response) => {
  try {
    const timestamp = new Date().toISOString().replace(/[-T:.]/g, "_");
    const backupFile = `backup_${timestamp}.sql`;

    // Set headers for file download
    res.setHeader("Content-Disposition", `attachment; filename=${backupFile}`);
    res.setHeader("Content-Type", "application/octet-stream");

    // Spawn the pg_dump command inside Docker and stream output
    const dumpProcess = spawn("docker", [
      "exec",
      dbConfig.container || "",
      "pg_dump",
      "-U",
      dbConfig.user || "",
      "-d",
      dbConfig.database || "",
    ]);

    // Pipe output directly to response
    dumpProcess.stdout.pipe(res);

    dumpProcess.stderr.on("data", (data) => {
      console.error("Backup error:", data.toString());
    });

    dumpProcess.on("error", (error) => {
      console.error("Backup process error:", error);
      res.status(500).json({ message: "Backup failed", error: error.message });
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const storage = multer.memoryStorage();
const upload = multer({ storage });

export const httpRestoreBackup = (req: Request, res: Response) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: "No file uploaded" });
      return;
    }

    console.log("Restoring backup:", req.file.originalname);

    // Spawn the `psql` command inside the Docker container and write the file stream to it
    const restoreProcess = spawn("docker", [
      "exec",
      "-i",
      dbConfig.container || "",
      "psql",
      "-U",
      dbConfig.user || "",
      "-d",
      dbConfig.database || "",
    ]);

    // Pipe file contents to the restore process
    restoreProcess.stdin.write(req.file.buffer);
    restoreProcess.stdin.end();

    restoreProcess.stderr.on("data", (data) => {
      console.error("Restore error:", data.toString());
    });

    restoreProcess.on("close", (code) => {
      if (code === 0) {
        res.json({ message: "Database restored successfully" });
      } else {
        res.status(500).json({ error: `Restore failed, Exit code: ${code}` });
      }
    });

    restoreProcess.on("error", (error) => {
      console.error("Restore process error:", error);
      res
        .status(500)
        .json({ error: `Restore process failed, ${error.message}` });
    });
  } catch (error) {
    console.error("Unexpected error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Middleware to handle file upload
export const uploadBackup = upload.single("backupFile");
