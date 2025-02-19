"use client";
import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { getBackupFile, getRestoreBackup } from "@/app/actions/backup";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./ui/alert-dialog";
import { Terminal, TriangleAlert } from "lucide-react";

const BackupRestore = () => {
  const [fileSql, setFileSql] = React.useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFileSql(file);
  };

  const RestoreDialog: React.FC = () => {
    const toast = useToast();
    const restoreItem = async () => {
      if (!fileSql) return alert("Please select a file first");
      const response = await getRestoreBackup(fileSql);

      if (response.success) {
        toast.toast({
          title: "Database restored!",
          description: `Database restored successfully.`,
        });
      } else {
        toast.toast({
          variant: "destructive",
          title: "Failed to restore",
          description: `Database failed to be restored.`,
        });
      }
    };
    return (
      <AlertDialog>
        <AlertDialogTrigger
          disabled={!fileSql}
          className={`${
            !fileSql ?
              "bg-gray-400 cursor-not-allowed hover:bg-gray-400"
            : "bg-red-500 hover:bg-red-400"
          }  text-white py-2 px-4 rounded-sm text-xs font-light`}
        >
          Restore
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will restore the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={async () => restoreItem()}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  };

  return (
    <div className="min-h-full min-w-full flex flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Backup</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Alert className="bg-lime-100">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can take complete backups of your database. It is important to
              store your backups securely.
            </AlertDescription>
          </Alert>
          <Button onClick={getBackupFile} variant="destructive">
            Backup
          </Button>
        </CardContent>
      </Card>

      {/* Restore */}
      <Card>
        <CardHeader>
          <CardTitle>Restore</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Alert className="bg-red-100">
            <TriangleAlert className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You should make sure that you are uploading the correct file for
              restoration of the database.
            </AlertDescription>
          </Alert>
          <Input
            type="file"
            accept=".sql"
            name="backupFile"
            onChange={handleFileChange}
          />
          <RestoreDialog />
        </CardContent>
      </Card>
    </div>
  );
};

export default BackupRestore;
