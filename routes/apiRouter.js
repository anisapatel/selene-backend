const express = require("express");
const apiRouter = express.Router();
//can refactor into const express = require("express").Router;

apiRouter.route("/").get((req, res, next) => {
  res.status(200).send({ msg: "Welcome" });
});

module.exports = apiRouter;
