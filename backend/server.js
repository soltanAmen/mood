import express from "express";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import userRoute from "./Routes/userRoute.js";
//import orderRoute from "./Routes/orderRoute.js";
import productRoute from "./Routes/productRoute.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use(cookieParser());

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongoose.connect(process.env.mongoURI);
mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB", err);
});
