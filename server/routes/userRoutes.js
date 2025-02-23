import express from "express";
import User from "../models/User.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { clerkId, name, email, role } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { clerkId },
      { name, email, role },
      { new: true, upsert: true }
    );
    res.json(user);
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
