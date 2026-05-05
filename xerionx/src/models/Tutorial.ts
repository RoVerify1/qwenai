import mongoose, { Document, Schema } from 'mongoose';

export interface ITutorial extends Document {
  title: string;
  mainImage: string;
  content: string;
  gallery: string[];
  createdAt: Date;
  updatedAt: Date;
}

const TutorialSchema = new Schema<ITutorial>(
  {
    title: { type: String, required: true },
    mainImage: { type: String, required: true },
    content: { type: String, required: true },
    gallery: { type: [String], default: [] },
  },
  { timestamps: true }
);

export default mongoose.models.Tutorial ||
  mongoose.model<ITutorial>('Tutorial', TutorialSchema);
