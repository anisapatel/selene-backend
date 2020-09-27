const Product = require("../models/productsModel");

//getting all the products
exports.readAllProducts = (req, res, next) => {
  //Always do a couple of console.logs just in case of errors.
  Product.find({})
    .exec()
    .then((products) => {
      res.status(200).send(products);
    })
    .catch(next);
};

//getting a specified products so uses request parameter
exports.readProduct = (req, res, next) => {
  const { id } = req.params;
  Product.findById(id)
    .exec()
    .then((product) => {
      if (!product) {
        res.status(404).json({
          message: `Cannot find a product with that productId: ${id}`,
        });
      } else {
        res.status(200).json({ product });
      }
    })
    .catch(next);
};
