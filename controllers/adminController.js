const Product = require("../models/productsModel");
const User = require("../models/usersModel");
//gets admin users
exports.getAdminUsers = (req, res, next) => {
  User.find({}).exec((err, users) => {
    if (err) console.log("Find Admin Users Error---------------", err);
    res.status(200).json({ users });
  });
};

//inserting a product into the database
exports.createProduct = (req, res, next) => {
  const { name, description, price } = req.body; //deconstruct values from the request body
  //mongodb generates new body anyway
  let newProduct = new Product({
    //set variable to new instance of Product model with values
    name,
    description,
    price,
  });
  newProduct.save(); //save model to database
  res.status(201).send({ product: newProduct }); //send back to the user the new product
};

//update current product by id so needs a request parameter
exports.updateProduct = (req, res, next) => {
  const { id } = req.params;
  //Destruct the update data from the req.body;
  const { name, description, price } = req.body;
  //Find the product, and update it's properties
  Product.findById(id).exec((err, updatedProduct) => {
    if (err) console.log("Updated Product-----------------", err);
    updatedProduct.name = name;
    updatedProduct.description = description;
    updatedProduct.price = price;
    //Save the updatedProduct with updated data.
    updatedProduct.save();
    //THen send back the data, just for testing purposes.
    res.status(200).send({ product: updatedProduct });
  });
};

//delete a product by id
exports.deleteProduct = (req, res, next) => {
  const { id } = req.params;
  //Use an object to delete the specified product.
  Product.deleteOne({ _id: id }).exec((err, product) => {
    //delete one method takes an obejct with the property you want the criteria to be
    //in mongo is is default _id
    //.deleteOne has exec which resolves the promise
    if (err) console.log("Delete One Error-----------------", err);
    res.status(204).json({ product });
  });
};
