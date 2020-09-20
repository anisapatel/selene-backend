const express = require("express");
const apiRouter = express.Router();
//can refactor into const express = require("express").Router;
const usersRouter = require("./usersRouter");
const { login, logout } = require("../controllers/usersController");

apiRouter.use("/user-data", usersRouter);
apiRouter.route("/login").post(login);
apiRouter.route("/logout").post(logout);

module.exports = apiRouter;
