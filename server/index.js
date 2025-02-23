import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import http from "http";
import { Server } from "socket.io";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import ChatMessage from "./models/ChatMessage.js";
import chatRouter from "./routes/chatRoutes.js";
import { requireAuth } from "@clerk/express";
import User from "./models/User.js";

dotenv.config();
console.log("CLERK_PUBLISHABLE_KEY:", process.env.CLERK_PUBLISHABLE_KEY);

const app = express();

app.use(
  cors({
    // origin: process.env.CLIENT_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.use("/api/users", requireAuth(), userRoutes);
app.use("/api/chat", requireAuth(), chatRouter);

connectDB();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

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
