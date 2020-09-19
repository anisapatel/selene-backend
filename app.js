const express = require("express"); // require instance of express library
const app = express(); //invoke instance of express library
//This can be refactored into const app = require("express")()
const apiRouter = require("./routes/apiRouter");

require("dotenv").config();
const bodyParser = require("body-parser"); //retrieve values from req.body otherwise it is undefined
const session = require("express-session"); //Require the session for saving user data and giving a user a unique experience.
const cors = require("cors");
const db = require("./db/data/index");

const adminController = require("./controllers/adminController");
const cloudinaryController = require("./controllers/cloudinaryController");
const productsController = require("./controllers/productsController");
const usersController = require("./controllers/usersController");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use("/api", apiRouter); //if the endpoint is ./api then go to the apiRouter.js file
module.exports = app;
