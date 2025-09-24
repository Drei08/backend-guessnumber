import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    score: { type: Number, default: 0 },
    tries: { type: Number, default: 0 },
    picture: { type: String, default: "" },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;