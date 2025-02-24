import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  submission: { type: mongoose.Schema.Types.ObjectId, ref: 'Submission', required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  comment: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Comment', commentSchema);
