import express from "express";
import Submission from "../models/IdeaSubmission.js";
import Comment from "../models/ProjectComments.js";
import User from "../models/User.js";
import { requireAuth } from "@clerk/clerk-sdk-node";

const router = express.Router();

// Get Ideas list
// done done done
router.get("/ideas", async (req, res) => {
  try {
    const ideas = await Submission.find({ approved: false });
    res.json(ideas);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get all Projects
// done done done
router.get("/projects", async (req, res) => {
  try {
    const projects = await Submission.find({ approved: true }).populate(
      "user",
      "name email"
    );
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ----------------------- Detail Endpoint -----------------------

// Get a single submission detail with its comments
// done done
router.get("/:id", async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id).populate(
      "user",
      "name role avatar"
    );
    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }
    const comments = await Comment.find({
      submission: submission._id,
    }).populate("user", "name email");
    res.json({ submission, comments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// ----------------------- Create & Update Endpoints -----------------------

// Create new submission (Idea)
router.post("/", async (req, res) => {
  const { title, imageUrl, description, category, techStacks } = req.body;
  const { clerkId } = req.body;
  try {
    // Find the user by clerkId
    const user = await User.findOne({ clerkId });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const newSubmission = new Submission({
      title,
      imageUrl,
      description,
      category,
      techStacks: techStacks.split(",").map((s) => s.trim()),
      starCount: 0,
      approved: false,
      user: user._id,
    });

    const savedSubmission = await newSubmission.save();
    console.log(savedSubmission);
    res.status(201).json(savedSubmission);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Approve a submission (only for authorized users, e.g., mentors/admins)
router.put("/:id/approve", requireAuth, async (req, res) => {
  try {
    // Optionally, check the user role here
    const submission = await Submission.findById(req.params.id);
    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }
    submission.approved = true;
    const updatedSubmission = await submission.save();
    res.json(updatedSubmission);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Increment star count for a submission
router.put("/:id/star", requireAuth, async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission) {
      return res.status(404).json({ message: "Submission not found" });
    }
    submission.starCount += 1;
    const updatedSubmission = await submission.save();
    res.json(updatedSubmission);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Add a comment to a submission
router.post("/:id/comment", requireAuth, async (req, res) => {
  try {
    const { comment } = req.body;
    const clerkId = req.session.userId;
    const user = await User.findOne({ clerkId });
    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }
    const newComment = new Comment({
      submission: req.params.id,
      user: user._id,
      comment,
    });
    const savedComment = await newComment.save();
    res.status(201).json(savedComment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
