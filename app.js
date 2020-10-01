require("dotenv").config(); //configure env file
const env = process.env.NODE_ENV || "development";
const bodyParser = require("body-parser"); //retrieve values from req.body otherwise it is undefined
const session = require("express-session"); //Require the session for saving user data and giving a user a unique experience.
const cors = require("cors"); //enable cors for cross origin sharing
const {
  handle404s,
  handleInvalidRoutes,
  handleMongoDbErrors,
  handle500s,
} = require("./errors/errors");
const mongoose = require("mongoose");
const express = require("express"); // require instance of express library
const app = express(); //invoke instance of express library
//This can be refactored into const app = require("express")()
const apiRouter = require("./routes/apiRouter");
if (env === "test") {
  mongoose.connect(
    process.env.CONNECTION_STRING_TEST,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.log("Database Error----------------", err);
      }
      console.log("Connected to test database");
    }
  );
} else {
  mongoose.connect(
    process.env.CONNECTION_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      if (err) {
        console.log("Database Error----------------", err);
      }
      console.log("Connected to database");
    }
  );
}

// const db = require("./data/db/index");
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
app.use(bodyParser.json()); //initalisign req.body, otherwise it's undefined
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    //Create a secret for the cookie store it in .env file
    //Secret can be anything.
    secret: process.env.SESSION_SECRET,
    //this for resaving the cookie false, if true can cause a memory leak.
    resave: false,
    //saveUnitialized best false, unless connect to a database.
    saveUninitialized: false,
    cookie: {
      //The max age of the cookie
      maxAge: 1000 * 60 * 60 * 24 * 14,
    },
  })
);
// setTimeout(() => {
//All our endpoints.
app.use("/api", apiRouter); //if the endpoint is ./api then go to the apiRouter.js file

// }, 200);
//these error handling middleware functions will be called before express's default error handling functions like 500 or 404
app.use(handleMongoDbErrors);
app.all("/*", handleInvalidRoutes); //catch any routes not found in the app
app.use(handle404s);
app.use(handle500s);
app.use(cors()); //cross origin requests
// app.use(bodyParser.urlencoded({ extended: true }));

module.exports = app;
