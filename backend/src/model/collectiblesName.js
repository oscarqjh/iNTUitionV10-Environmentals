import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  collectibleName: {
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
});

const Collectibles = mongoose.model("Collectibles", dataSchema);

export { Collectibles };
