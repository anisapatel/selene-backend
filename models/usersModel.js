const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define user collection objects structure with datatypes
//use Auth0 for authentication in the future
//user will login but test data for now

const user = new Schema({
  name: String,
  email: String,
  username: String,
  auth0_id: String,
});

module.exports = mongoose.model("User", user);
