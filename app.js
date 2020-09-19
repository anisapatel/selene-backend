const express = require("express"); // require instance of express library
const app = express(); //invoke instance of express library
//This can be refactored into const app = require("express")()
const apiRouter = require("./routes/apiRouter");

require("dotenv").config();
const bodyParser = require("body-parser"); //retrieve values from req.body otherwise it is undefined
const cors = require("cors");

const adminController = require("./controllers/adminController");
const cloudinaryController = require("./controllers/cloudinaryController");
const productsController = require("./controllers/productsController");
const usersController = require("./controllers/usersController");

app.use("/api", apiRouter); //if the endpoint is ./api then go to the apiRouter.js file
module.exports = app;
