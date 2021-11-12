const express = require("express");
const notes = require("./data/nodes");
const dotenv = require("dotenv");
const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running    ");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.listen(
  process.env.EXPRESS_SERVER_PORT,
  console.log(`Server Started on PORT ${process.env.EXPRESS_SERVER_PORT}`)
);
