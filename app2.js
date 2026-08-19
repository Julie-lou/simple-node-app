const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("YAY IT WORKS!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
