import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary
cloudinary.config({
  cloud_name: "your_cloud_name",
  api_key: "your_api_key",
  api_secret: "your_api_secret",
});

app.post("/api/members", async (req, res) => {
  try {
    const { profilePic, cnicFront, cnicBack, ...otherFields } = req.body;

    // Helper function to upload a base64 image to Cloudinary
    const uploadBase64ToCloudinary = async (base64Image) => {
      const response = await cloudinary.uploader.upload(base64Image, {
        folder: "member_files", // Optional: Specify a folder
      });
      return response.secure_url; // Return the uploaded image URL
    };

    // Upload images if provided
    const profilePicUrl =
      profilePic ? await uploadBase64ToCloudinary(profilePic) : null;
    const cnicFrontUrl =
      cnicFront ? await uploadBase64ToCloudinary(cnicFront) : null;
    const cnicBackUrl =
      cnicBack ? await uploadBase64ToCloudinary(cnicBack) : null;

    // Save data or process as needed
    const savedData = {
      ...otherFields,
      profilePic: profilePicUrl,
      cnicFront: cnicFrontUrl,
      cnicBack: cnicBackUrl,
    };

    console.log("Saved Data:", savedData);

    res.status(200).json({ message: "Member data saved successfully!" });
  } catch (error) {
    console.error("Error uploading files:", error);
    res.status(500).json({ error: "Failed to upload images." });
  }
});
