const express = require("express");
const app = express();
const port = process.env.port || 5000;
const cors = require("cors");

const places = require("./data/destinations.json");
const divisions = require("./data/bdDivision.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send({ status: true, message: "Server started." });
});

//get all places
app.get("/places/all", (req, res) => {
  res.json(places);
});

//get single place by id
app.get("/place/id/:id", (req, res) => {
  const requestId = parseInt(req.params.id);
  const requestedPlace = places.find(place => place.id === requestId) || null;
  res.send(requestedPlace ? requestedPlace : { status: false });
});

//bangladesh divisions
app.get("/division/all", (req, res) => {
  const onlyDivisions = [];
  for (const division of divisions[2].data) {
    onlyDivisions.push(division.name);
  }
  res.send(onlyDivisions);
});

//send time
app.get("/times/date", (req, res) => {
  const time = new Date();
  console.log(time.getFullYear());
  const dateTime = [time.getFullYear(), time.getMonth(), time.getDay()];
  res.send(dateTime);
});

app.listen(port, () => {
  console.log(`server started at port ${port}`);
});
