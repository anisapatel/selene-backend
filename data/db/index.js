const mongoose = require("mongoose");
const env = process.env.NODE_ENV || "development";

mongoose
  .connect(
    env === "test"
      ? process.env.CONNECTION_STRING_TEST
      : process.env.CONNECTION_STRING,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
