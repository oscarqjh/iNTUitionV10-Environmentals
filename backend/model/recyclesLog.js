import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  userId: {
    required: true,
    type: String,
  },
  environmentalId: {
    required: true,
    type: String,
  },
  locationId: {
    required: true,
    type: String,
  },
  recycleCompany: {
    required: true,
    type: String,
  },
  recycleType: {
    required: true,
    type: String,
  },
  recycleAmount: {
    required: true,
    type: Number,
  },
  experienceEarned: {
    required: true,
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const RecyclesLog = mongoose.model("RecyclesLog", dataSchema);

export { RecyclesLog };
