const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", require("./routes/users.route"));
app.use("/students", require("./routes/students.route"));

mongoose
  .connect(process.env.DB_URL.toString())
  .then(() => {
    console.log("mongoDB connected");
  })
  .catch(() => console.log("error"));
2;
const server = app.listen(3001, () => {
  console.log("сервер запущен");
});
