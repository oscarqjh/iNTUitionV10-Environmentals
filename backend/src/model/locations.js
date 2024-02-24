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
});

const Location = mongoose.model("Location", dataSchema);

export { Location };
