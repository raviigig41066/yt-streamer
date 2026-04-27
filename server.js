const express = require("express");
const { exec } = require("child_process");

const app = express();

app.get("/", (req, res) => {
  res.send("YouTube 24x7 Stream Running");
});

app.listen(10000, () => {
  console.log("Server started");
});
