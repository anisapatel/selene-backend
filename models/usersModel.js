const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define user collection objects structure with datatypes
//use Auth0 for authentication in the future
//user will login but test data for now

const user = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  username: { type: String, required: true },
  auth0_id: { type: String, required: true },
  profile_picture: { type: String },
});

module.exports = mongoose.model("User", user);
