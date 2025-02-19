"use client";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { getBackupFile } from "@/app/actions/backup";

const BackupRestore = () => {
  const [fileSql, setFileSql] = React.useState(null);
  const handleRestore = async () => {
    const file = fileSql;
    if (!file) return;

    const formData = new FormData();
    formData.append("backupFile", file);

    const response = await fetch("/api/restore", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    alert(data.message);
  };

  const handleFileChange = (event) => {
    setFileSql(event.target.files[0]);
  };

  return (
    <div className="min-h-full min-w-full flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Backup</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={getBackupFile} variant={"destructive"}>
            Backup
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          {" "}
          <CardTitle>Restore</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Input type="file" accept=".sql" onChange={handleFileChange} />
          <Button variant={"destructive"} onClick={handleRestore}>
            Restore
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default BackupRestore;
