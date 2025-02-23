import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  clerkId: { type: String, required: true, unique: true }, // Clerk user identifier
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, enum: ['user', 'mentor'], default: 'user' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('User', userSchema);
