const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//needs an id, description and price
//mongodb creates default id

const product = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

//To create a model, use the name of the model, and the schema with the properties of the model that  wil be inserted to the database.

module.exports = mongoose.model("Product", product);
