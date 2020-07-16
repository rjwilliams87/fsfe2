const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from my node server!");
});

app.get("/test", (req, res) => {
  res.status(418);
  res.set("x-test-status", "test-fail");
  res.send("this isn't working!");
});

app.listen(port, () => console.log(`Example app running on port ${port}`));
