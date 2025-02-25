import express from "express";
import Submission from "../models/IdeaSubmission.js";
import Comment from "../models/ProjectComments.js";
import User from "../models/User.js";

const router = express.Router();

// Fetch all unapproved submissions (treated as "Ideas")
router.get("/ideas", async (req, res) => {
  try {
    const ideas = await Submission.find({ approved: false });
    res.json(ideas);
  } catch (error) {
    console.error("Error fetching ideas:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Fetch all approved submissions (treated as "Projects")
router.get("/projects", async (req, res) => {
  try {
    const projects = await Submission.find({ approved: true }).populate(
      "user",
      "name email"
    );
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Fetch a single submission and its comments
router.get("/:id", async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id).populate(
      "user",
      "name role avatar"
    );
    if (!submission) {
      console.log("Submission not found:", req.params.id);
      return res.status(404).json({ message: "Submission not found" });
    }

    const comments = await Comment.find({
      submission: submission._id,
    }).populate("user", "name avatar");

    res.json({ submission, comments });
  } catch (error) {
    console.error(" Error fetching submission details:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Create a new submission (unapproved by default -> "Idea")
router.post("/", async (req, res) => {
  const { title, imageUrl, description, category, techStacks, clerkId } =
    req.body;

  try {
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
    res.status(201).json(savedSubmission);
  } catch (error) {
    console.error("Error creating submission:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Approve a submission (NO AUTH -> anyone can approve for now)
router.put("/:id/approve", async (req, res) => {
  try {
    console.log(`[DEBUG] Approving submission with id: ${req.params.id}`);
    // If you want to see who triggered the approve, read it from req.body
    // e.g., const { clerkId } = req.body; console.log("Approved by clerkId:", clerkId);

    const submission = await Submission.findById(req.params.id);
    if (!submission) {
      console.log("[DEBUG] Submission not found for approval:", req.params.id);
      return res.status(404).json({ message: "Submission not found" });
    }

    submission.approved = true;
    const updatedSubmission = await submission.save();
    console.log("[DEBUG] Submission approved. Saved data:", updatedSubmission);
    res.json(updatedSubmission);
  } catch (error) {
    console.error("[DEBUG] Error approving submission:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Increment star count (NO AUTH -> anyone can star for now)
router.put("/:id/star", async (req, res) => {
  try {
    console.log(`[DEBUG] Starring submission with id: ${req.params.id}`);
    // If you want to see who starred it, read from req.body or query
    // e.g., const { clerkId } = req.body;

    const submission = await Submission.findById(req.params.id);
    if (!submission) {
      console.log("[DEBUG] Submission not found for starring:", req.params.id);
      return res.status(404).json({ message: "Submission not found" });
    }

    submission.starCount += 1;
    const updatedSubmission = await submission.save();
    console.log(
      "[DEBUG] Star count updated. New count:",
      updatedSubmission.starCount
    );
    res.json(updatedSubmission);
  } catch (error) {
    console.error("[DEBUG] Error updating star count:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Add a comment to a submission (NO AUTH -> anyone can comment for now)
router.post("/:id/comment", async (req, res) => {
  try {
    const { comment, clerkId } = req.body;
    console.log(`[DEBUG] Adding comment to submission id: ${req.params.id}`);

    const user = await User.findOne({ clerkId });
    if (!user) {
      console.log("[DEBUG] User not found for clerkId:", clerkId);
      return res.status(401).json({ message: "User not found" });
    }

    const newComment = new Comment({
      submission: req.params.id,
      user: user._id,
      comment,
    });

    const savedComment = await newComment.save();
    console.log("[DEBUG] Comment saved successfully:", savedComment);

    res.status(201).json(savedComment);
  } catch (error) {
    console.error("[DEBUG] Error adding comment:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
