"use strict";

const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const {
  MongoClient
} = require("mongodb");
const MONGOB_URI = "mongodb://localhost:27017/tweeter";

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


MongoClient.connect(MONGOB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect:${MONGOB_URI}`);
    throw err;
  }
  console.log(`Connected to mongodb: ${MONGOB_URI}`);

  const DataHelpers = require("./lib/data-helpers.js")(db);

  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  app.use("/tweets", tweetsRoutes);
  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  });
});