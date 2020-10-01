const express = require("express");
const apiRouter = express.Router();
//can refactor into const express = require("express").Router;
const usersRouter = require("./usersRouter");
const productsRouter = require("./productsRouter");
const adminRouter = require("./adminRouter");
const { login, logout } = require("../controllers/usersController");
const app = express.Router();

apiRouter.use("/user-data", usersRouter);
apiRouter.use("/products", productsRouter);
apiRouter.use("/users", adminRouter);
app.route("/auth/callback").get(login);
apiRouter.route("/logout").post(logout);

module.exports = apiRouter;
