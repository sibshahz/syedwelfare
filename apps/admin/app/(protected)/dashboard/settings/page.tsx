import BackupRestore from "@/components/backup-restore";
import React from "react";

export const dynamic = "force-dynamic";

const Page = () => {
  return (
    <div className="flex flex-col gap-4">
      <BackupRestore />
    </div>
  );
};

export default Page;
