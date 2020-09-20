const Product = require("../models/productsModel");

//getting all the products
exports.readAllProducts = (req, res, next) => {
  //Always do a couple of console.logs just in case of errors.
  Product.find({}).exec((err, products) => {
    if (err) console.log("Get Product Mongoose Error------------------", err);
    //Always log the data you are returning from the database to check if you are receiving the right data.
    console.log("products-------------", products);
    res.status(200).send(products);
  });
};

//getting a specified products so uses request parameter
exports.readProduct = (req, res, next) => {
  const { id } = req.params;
  Product.findById(id).exec((err, product) => {
    if (err) console.log("Get Single Product Error---------------", err);
    console.log("product--------------", product);
    res.status(200).json({ product });
  });
};
