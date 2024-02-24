import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  environmental_name: {
    required: true,
    type: String,
  },
  element: {
    required: true,
    type: String,
  },
  rarity: {
    required: true,
    type: String,
  },
  level: {
    required: true,
    type: Number,
  },
  experience: {
    required: true,
    type: Number,
    default: 0,
  },
  owner_id: {
    required: true,
    type: String,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  image_url: {
    required: true,
    type: String,
  },
});

const Environmentals = mongoose.model("Environmentals", dataSchema);

export { Environmentals };
