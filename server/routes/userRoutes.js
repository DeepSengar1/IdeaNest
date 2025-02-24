import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { clerkId, name, email, role, avatar } = req.body;
  if (!clerkId || !email) {
    return res.status(400).json({ message: "clerkId and email are required" });
  }

  try {
    const user = await User.findOneAndUpdate(
      { clerkId },
      { name, email, role, avatar },
      { new: true, upsert: true }
    );

    res.json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
