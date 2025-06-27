const mongoose = require("mongoose")

const couseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    phone: {
      type: String,
      require: true,
    },
    cnic: {
      type: String,
      require: true,
    },
    course: {
      type: String,
      require: true,
    },
    campus: {
      type: String,
      require: true,
    },
    timeSlout: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: true,
    },
    agreement: {
      type: Boolean,
      require: true,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Course", couseSchema)