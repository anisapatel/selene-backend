const express = require("express");
const adminRouter = express.Router();
const {
  getAdminUsers,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/adminController");
//only admin can create, update and delete products
adminRouter.get(getAdminUsers);
adminRouter.post(createProduct);
adminRouter.route("/:id").put(updateProduct).delete(deleteProduct);

module.exports = adminRouter;
