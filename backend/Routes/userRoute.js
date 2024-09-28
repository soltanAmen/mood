import express from "express";
const router = express.Router();
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import axios from "axios";
import User from "../models/userModel.js";

// Define your user routes here
router.use(cookieParser());
// GET /users
const saltRounds = 10;
router.get("/me", async (req, res) => {
  const token = req.cookies.token;
  console.log(token);
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    res.json(user);
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        error: "User does not exist",
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Password is incorrect" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      expires: new Date(Date.now() + 3600000),
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashpassword = await bcrypt.hash(password, saltRounds);
    const newUser = await User.create({ name, email, password: hashpassword });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      expires: new Date(Date.now() + 3600000),
    });

    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

router.get("/logout", async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

// PUT /users/:id
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const user = await User.findById(id);
    if (user) {
      user.name = name;
      user.email = email;
      user.password = password;
      await user.save();
      res.json(user);
    }
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

// DELETE /users/:id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

export default router;
