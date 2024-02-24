
import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  user_id: {
    required: true,
    type: String,
  },
  user_name: {
    required: true,
    type: String,
  },
  user_email: {
    required: true,
    type: String,
  },
  total_environmentals_level: {
    required: true,
    type: Number,
  },
  profile_picture_url: {
    required: true,
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", dataSchema);

export { User };
