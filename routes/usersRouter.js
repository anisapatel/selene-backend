const express = require("express");
const usersRouter = express.Router();
const {
  readUserData,
  addToCart,
  removeFromCart,
} = require("../controllers/usersController");

usersRouter.get(readUserData);
usersRouter.route("/cart").post(addToCart);
usersRouter.route("/cart/:id").delete(removeFromCart);

module.exports = usersRouter;
