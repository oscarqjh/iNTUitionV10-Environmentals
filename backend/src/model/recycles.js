import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  recycleId: {
    required: true,
    type: String,
  },
  userId: {
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
});

const Recycles = mongoose.model("Recycles", dataSchema);

export { Recycles };
