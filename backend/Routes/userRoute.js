import express from "express";
const router = express.Router();
import axios from "axios";
import User from "../models/userModel.js";

// Define your user routes here

// GET /users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// GET /users/:id
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    if (user) {
      res.json(user);
    }
  } catch (error) {
    res.status(404).json({ error: "User not found" });
  }
});

// POST /users
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({ name, email, password });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
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
