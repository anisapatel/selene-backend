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
  // Product.find({}).exec((err, products) => {
  //   if (err) {
  //     next(err);
  //   }
  //   //Always log the data you are returning from the database to check if you are receiving the right data.
  //   // console.log("products-------------", products);
  //   res.status(200).send(products);
  // });
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
  // Product.findById(id).exec((err, product) => {
  //   if (err) {
  //     throw err;
  //   }

  //   if (!product) {
  //     res.send(404);
  //   }
  //   // console.log("product--------------", product);

  //   res.status(200).json({ product });
  // });
};
