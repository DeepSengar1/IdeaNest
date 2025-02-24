import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
import ChatMessage from "./models/ChatMessage.js";
import chatRouter from "./routes/chatRoutes.js";
import { requireAuth } from "@clerk/express";
// import User from "./models/User.js";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import uploadRouter from './routes/uploadRoute.js'
<<<<<<< HEAD
import User from './models/User.js'
=======
import submissionRoutes from "./routes/IdeaSubmissionRoute.js";
>>>>>>> 85da9f2b9812267c24337e3213d25285e231f484

dotenv.config();
console.log("CLERK_PUBLISHABLE_KEY:", process.env.CLERK_PUBLISHABLE_KEY);

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.send("Backend is running");
// });

// app.use("/", requireAuth(), userRoutes);
app.use("/api/chat", requireAuth(), chatRouter);
app.use("/api/upload", requireAuth(), uploadRouter);
app.use("/api/submissions", submissionRoutes);

app.post("/user", async (req, res) => {
  console.log("Received request body:", req.body); // Debugging step

  const { clerkId, name, email, role } = req.body;

  if (!clerkId) {
    return res.status(400).json({ message: "clerkId is required" });
  }

  try {
    let updateFields = { name, role };

    // Only update the email if it's valid (not null/undefined)
    if (email) {
      updateFields.email = email;
    } else {
      updateFields.$unset = { email: "" }; // Remove email field if null
    }

    const user = await User.updateOne(
      { clerkId },
      { $set: updateFields },
      { upsert: true }
    );

    console.log("User saved/updated:", user);
    res.json({ message: "User updated successfully", user });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});



connectDB();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer Cloudinary Storage for different file types
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let folder = "uploads"; // Cloudinary folder
    let resource_type = "auto"; // Auto-detect type (image, video, raw file)
    
    return {
      folder: folder,
      resource_type: resource_type,
      format: file.mimetype === "application/pdf" ? "pdf" : undefined, // Force PDF format if applicable
    };
  },
});

// ✅ Create Multer Upload Middleware
const upload = multer({ storage });

// ✅ Export Cloudinary, Storage, and Upload
export { cloudinary, storage, upload };

io.on("connection", (socket) => {
  console.log("New client connected:", socket.id);

  socket.on("chat message", async (msg) => {
    try {
      const userRecord = await User.findOne({ clerkId: msg.senderId });
      if (!userRecord) {
        throw new Error("User not found for clerk id: " + msg.senderId);
      }

      const chatMsg = new ChatMessage({
        sender: userRecord._id,
        message: msg.message,
      });
      await chatMsg.save();

      const populatedMsg = await chatMsg.populate("sender", "name avatarUrl");
      io.emit("chat message", populatedMsg);
    } catch (error) {
      console.error("Error saving chat message:", error);
    }
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
