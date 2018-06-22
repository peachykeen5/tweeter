"use strict";

const {MongoClient} = require("mongodb");
const MONGOB_URI = process.env.MONGODB_URI;

MongoClient.connect(MONGOB_URI, (err, db) => {
    if (err) {
        console.error(`Failed to connect:${MONGOB_URI}`);
        throw err;
    }
// We have a connection to the "tweeter" db, starting here.
    console.log(`Connected to mongodb: ${MONGOB_URI}`);

// ==> Refactored and wrapped as new, tweet-specific function:

function getTweets(callback) {
    db.collection("tweets").find().toArray(callback);
}

  // ==> Later it can be invoked. Remember even if you pass
  //     `getTweets` to another scope, it still has closure over
  //     `db`, so it will still work. Yay!

getTweets((err, tweets) => {
    if (err) throw err;

    console.log("Logging each tweet:");
    for (let tweet of tweets) {
        console.log(tweet);
    }
        db.close();
    });


});