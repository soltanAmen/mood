import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import userRoute from "./routes/userRoute.js";
//import productRoute from "./routes/productRoute.js";
//import orderRoute from "./routes/orderRoute.js";

import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
//import data from "./data.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json());
app.use("/users", userRoute);
//app.use("/products", productRoute);
//app.use("/orders", orderRoute);
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
