const express = require("express");
const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Main Page!");
});

app.get("/Home", (req, res) => {
  res.send("Hello,This is Home Page!");
});

app.get("/About", (req, res) => {
  res.send("Hello,This is About Page!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
