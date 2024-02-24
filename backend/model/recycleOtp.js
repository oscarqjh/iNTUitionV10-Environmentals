import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  recycleOtp: {
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

dataSchema.index( { expireAt: 1 }, { expireAfterSeconds: 300 } )

const RecycleOtp = mongoose.model("RecycleOtp", dataSchema);

export { RecycleOtp };
