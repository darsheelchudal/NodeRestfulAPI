import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  useranme: {
    required: true,
    type: String,
  },
  password: {
    required: true,
  },
});
