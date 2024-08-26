import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  address: {
    type: String,
    required: false,
  },
  isAdmin: { type: Boolean, required: true, default: false },
});

const User = mongoose.model("User", userSchema);

export default User;
