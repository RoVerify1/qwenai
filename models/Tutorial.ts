import mongoose from 'mongoose';

const tutorialSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  mainImage: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  gallery: {
    type: [String],
    default: [],
  },
}, {
  timestamps: true,
});

export default mongoose.models.Tutorial || mongoose.model('Tutorial', tutorialSchema);
