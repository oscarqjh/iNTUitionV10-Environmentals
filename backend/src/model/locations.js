import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  location_id: {
    required: true,
    type: String,
  },
  location_name: {
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
