const express = require("express");
const productsRouter = express.Router();

const {
  readAllProducts,
  readProduct,
} = require("../controllers/productsController");

//reads products from database

productsRouter.get(readAllProducts);
productsRouter.route("/:id").get(readProduct);

module.exports = productsRouter;
