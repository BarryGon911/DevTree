const express = require("express");
const bodyParser = require("body-parser");

const server = express();
const PORT = 4000;

// URLs Routing
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page from Express!");
});

app.get("/ecommerce", (req, res) => {
  res.send("Welcome to my Ecommerce!");
});

server.listen(PORT, () => {
  console.log(`NodeJS server is running on http://localhost:${PORT}`);
});
