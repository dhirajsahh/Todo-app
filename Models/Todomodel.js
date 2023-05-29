const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    message: {
      type: String,
      required: [true, "message is required"],
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("todo", todoSchema);
