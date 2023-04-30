const express = require("express");
const app = express();
const port = process.env.port || 5000;
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send({ status: true, message: "Server started." });
});

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
