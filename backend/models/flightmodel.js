import mongoose from "mongoose";
const FlightSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
    airline: {
      type: String,
      required: false,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Flights", FlightSchema);
