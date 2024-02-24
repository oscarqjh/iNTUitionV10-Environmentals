
import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: String,
  },
  userName: {
    required: true,
    type: String,
  },
  userEmail: {
    required: true,
    type: String,
  },
  totalEnvironmentalsLevel: {
    required: true,
    type: Number,
  },
  profilePictureUrl: {
    required: true,
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", dataSchema);

export { User };
