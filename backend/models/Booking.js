import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    productId: {
      type: String
    },
    userEmail: {
      type: String,
    },
    fullName: {
      type: String,
      // required: true,
    },
    tourName: {
        type: String,
        // required: true
    },
    guestSize:{
        type: Number,
        // require: true
    },
    phone: {
        type: Number,
        // require: true
    },
    bookAt: {
        type: Date, 
    }
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
