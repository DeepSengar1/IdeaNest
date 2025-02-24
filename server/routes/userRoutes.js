// import express from "express";
// import User from "../models/User.js";

// const router = express.Router();

// router.post("/users", async (req, res) => {
//   console.log("Received POST request:", req.body); // Debugging step

//   const { clerkId, name, email, role } = req.body;

//   if (!clerkId || !email) {
//     return res.status(400).json({ message: "clerkId and email are required" });
//   }

//   try {
//     const user = await User.findOneAndUpdate(
//       { clerkId },
//       { name, email, role },
//       { new: true, upsert: true }
//     );

//     console.log("User saved/updated:", user); // Debugging step

//     res.json(user);
//   } catch (error) {
//     console.error("Error updating user:", error);
//     res.status(500).json({ message: "Server error", error: error.message });
//   }
// });


// export default router;
