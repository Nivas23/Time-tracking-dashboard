const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const data = require("./data.json");
app.use(cors());
app.get("/", (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log("Listening on port 3000");
});
