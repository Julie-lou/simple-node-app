const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Celsius → Fahrenheit
app.get("/convert/:celsius", (req, res) => {
  const celsius = Number(req.params.celsius);

  if (Number.isNaN(celsius)) {
    return res.status(400).json({
      error: "Temperature must be a number",
    });
  }

  const fahrenheit = (celsius * 9) / 5 + 32;

  res.status(200).json({
    celsius,
    fahrenheit,
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Temperature API running on port ${PORT}`);
  });
}

module.exports = app;
