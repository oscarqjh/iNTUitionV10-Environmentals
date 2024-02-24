import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  locationName: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  recycleType: {
    required: true,
    type: String,
  },
  recycleCompany: {
    required: true,
    type: String,
  },
});

const Locations = mongoose.model("Locations", dataSchema);

export { Locations };
