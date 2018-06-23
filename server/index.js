"use strict";
const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
require('dotenv').config();
const app = express();

const {
  MongoClient
} = require("mongodb");
const MONGOB_URI = process.env.MONGODB_URI;
//const mongoDb = process.env.MONGODB


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


MongoClient.connect(MONGOB_URI, (err, client) => {
  if (err) {
    console.error(`Failed to connect:${MONGOB_URI}`);
    throw err;
  }
  console.log(`Connected to mongodb: ${MONGOB_URI}`);

  const DataHelpers = require("./lib/data-helpers.js")(client);

  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  app.use("/tweets", tweetsRoutes);
  app.listen(process.env.PORT || 8080) //=> {
    //console.log("Example app listening on port " + PORT);

});