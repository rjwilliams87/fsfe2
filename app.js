const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello from my node server!");
 }
);

app.listen(port, () => console.log(`Example app running on port ${port}`));
