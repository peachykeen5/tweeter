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



app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


MongoClient.connect(MONGOB_URI, (err, client) => {
  if (err) {
    console.error(`Failed to connect:${MONGOB_URI}`);
    throw err;
  }
  const db = client.db('tweeter');
  console.log(`Connected to mongodb: ${MONGOB_URI}`);

  const DataHelpers = require("./lib/data-helpers.js")(db);

  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  app.use("/tweets", tweetsRoutes);
  app.listen(process.env.PORT || 8080) //=> {
    //console.log("Example app listening on port " + PORT);

});