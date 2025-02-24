// import express from "express";
// import User from "../models/User.js";

// const router = express.Router();

<<<<<<< HEAD
// router.post("/users", async (req, res) => {
//   console.log("Received POST request:", req.body); // Debugging step
=======
router.post("/", async (req, res) => {
  const { clerkId, name, email, role, avatar } = req.body;
  
  try {
    const user = await User.findOneAndUpdate(
      { clerkId: clerkId },
      {
        name: name,
        email: email,
        role: role,
        avatar: avatar,
      },
      { new: true, upsert: true }
    );
>>>>>>> 85da9f2b9812267c24337e3213d25285e231f484

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
