import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  imageUrl: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  starCount: { type: Number, default: 0 },
  techStacks: { type: [String], required: true },
  approved: { type: Boolean, default: false }, // false = Idea, true = Project
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Submission", submissionSchema);
