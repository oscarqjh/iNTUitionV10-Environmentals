import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  recycle_otp: {
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

const RecycleOtp = mongoose.model("RecycleOtp", dataSchema);

export { RecycleOtp };
