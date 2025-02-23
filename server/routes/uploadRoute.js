import express from "express";
// import Upload from "../models/upload.js";

const router = express.Router();

router.post("/api/upload", async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: "No file uploaded" });
      }
  
      res.json({
        message: "File uploaded successfully",
        url: `/uploads`, // Cloudinary file URL
        format: req.file.mimetype, // File type
      });
    } catch (error) {
      res.status(500).json({ message: "Upload failed", error });
    }
});

export default router;
