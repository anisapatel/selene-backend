const express = require("express");
const adminRouter = express.Router();
const {
  getAdminUsers,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/adminController");
const { handleInvalidMethods } = require("../errors/errors");
//only admin can create, update and delete products
adminRouter
  .route("/")
  .get(getAdminUsers)
  .post(createProduct)
  .all(handleInvalidMethods);
adminRouter
  .route("/:id")
  .patch(updateProduct)
  .delete(deleteProduct)
  .all(handleInvalidMethods);

module.exports = adminRouter;
