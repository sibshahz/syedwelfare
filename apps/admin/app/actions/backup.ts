import axios_default from "@/lib/api/axios-core";

export const getBackupFile = async () => {
  try {
    const response = await axios_default.get("backup/get-backup", {
      responseType: "blob",
    });

    if (!response) {
      throw new Error("Failed to fetch backup file");
    }

    // Convert response into a Blob
    const blob = new Blob([response.data]);
    const url = window.URL.createObjectURL(blob);

    // Create a temporary link and trigger download
    const a = document.createElement("a");
    a.href = url;
    const timestamp = new Date()
      .toLocaleDateString("en-GB")
      .replace(/\//g, "-");
    a.download = `backup_${timestamp}.sql`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (error) {
    console.error("Failed to fetch resources:", error);
  }
};
