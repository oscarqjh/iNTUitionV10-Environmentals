import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  environmentalName: {
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
  // level: {
  //   required: true,
  //   type: Number,
  // },
  experience: {
    type: Number,
    default: 0,
  },
  ownerId: {
    required: true,
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imageUrl: {
    required: true,
    type: String,
  },
});

const Environmentals = mongoose.model("Environmentals", dataSchema);

export { Environmentals };
