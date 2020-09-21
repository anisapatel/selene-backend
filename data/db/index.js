const mongoose = require("mongoose");

mongoose
  .connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .catch((e) => {
    console.error("Connection error", e.message);
  });

// mongoose.connect(process.env.CONNECTION_STRING, (err) => {
//   if (err) {
//     console.log("Database Error----------------", err);
//   }
//   console.log("Connected to database");
// });

const db = mongoose.connection;

module.exports = db;
