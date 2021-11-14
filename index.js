import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import postRoutes from "./routes/posts.js";

// Creating Express Object
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", postRoutes); // Routes all the traffic to routes/posts.js
dotenv.config();

// Connecting to database and starting server
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(
      process.env.SERVER_PORT,
      console.log(
        `Backend server is runnging on PORT: ${process.env.SERVER_PORT}`
      )
    )
  )
  .catch((error) => console.log(error.message));
