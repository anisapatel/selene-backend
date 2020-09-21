const express = require("express"); // require instance of express library
const app = express(); //invoke instance of express library
//This can be refactored into const app = require("express")()
const apiRouter = require("./routes/apiRouter");

require("dotenv").config(); //configure env file
const bodyParser = require("body-parser"); //retrieve values from req.body otherwise it is undefined
const session = require("express-session"); //Require the session for saving user data and giving a user a unique experience.
const cors = require("cors"); //enable cors for cross origin sharing
const db = require("./data/db/index");

const adminController = require("./controllers/adminController");
const cloudinaryController = require("./controllers/cloudinaryController");
const productsController = require("./controllers/productsController");
const usersController = require("./controllers/usersController");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); //cross origin requests
app.use(bodyParser.json()); //initalisign req.body, otherwise it's undefined

db.on("error", console.error.bind(console, "MongoDB connection error:"));

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

app.use("/api", apiRouter); //if the endpoint is ./api then go to the apiRouter.js file
module.exports = app;
