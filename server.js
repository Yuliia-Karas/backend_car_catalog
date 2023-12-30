const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
const { carCatalog } = require("./database");

app.get("/", (req, res) => {
  res.send("Hello,world!");
});

app.get("/cars", async (req, res) => {
  try {
    const data = await carCatalog;
    res.send(data.rows);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});

app.listen(3000, () => {
  console.log("Listen on port 3000");
});
