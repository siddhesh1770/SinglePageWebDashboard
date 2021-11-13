import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";

// Creating Express Object
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
dotenv.config();

// API Build Up
app.get("/api", (req, res) => {
  res.send([{ hello: 1669 }, { siddhesh: 1770 }]);
});

app.listen(
  process.env.SERVER_PORT,
  console.log(`Server started on PORT: ${process.env.SERVER_PORT}`)
);
