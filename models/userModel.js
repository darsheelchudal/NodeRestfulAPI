import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  useranme: {
    required: true,
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    required: true,
    type: String,
  },
});

export const User = mongoose.Model("User", userSchema);
