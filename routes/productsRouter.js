const express = require("express");
const productsRouter = express.Router();

const {
  readAllProducts,
  readProduct,
} = require("../controllers/productsController");
const { handleInvalidMethods } = require("../errors/errors");

//reads products from database

productsRouter.route("/").get(readAllProducts).all(handleInvalidMethods);
productsRouter.route("/:id").get(readProduct).all(handleInvalidMethods);

module.exports = productsRouter;
