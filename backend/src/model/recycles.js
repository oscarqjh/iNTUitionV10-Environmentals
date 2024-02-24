import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  recycle_id: {
    required: true,
    type: String,
  },
  user_id: {
    required: true,
    type: String,
  },
  location_id: {
    required: true,
    type: String,
  },
  recycle_company: {
    required: true,
    type: String,
  },
  recycle_type: {
    required: true,
    type: String,
  },
  recycle_amount: {
    required: true,
    type: Number,
  },
  experience_earned: {
    required: true,
    type: Number,
  },
});

const Recycles = mongoose.model("Recycles", dataSchema);

export { Recycles };
