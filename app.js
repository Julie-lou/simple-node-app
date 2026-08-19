const express = require("express");

const app = express();

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello from my DevOps pipeline!");
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;

module.exports = app;
