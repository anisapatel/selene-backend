exports.handleMongoDbErrors = (err, req, res, next) => {
  //handle cast errors, like an invalid mongodb id input
  //duplicate key error in document creation like two products with the same name uses code
  //validation errors like a product with an average rating of more than a million
  if (
    err.name === "CastError" ||
    err.code === 11000 ||
    err.name === "ValidationError"
  ) {
    res.status(400).send({ message: "Bad request" });
  }

  next(err);
};

exports.handleInvalidRoutes = (req, res, next) => {
  res
    .status(404)
    .send({ message: `Path ${req.originalUrl} not found on this server!` });

  next(err);
};

exports.handle404s = (err, req, res, next) => {
  if (err.status) {
    res.status(err.status).send({ message: err.message });
  } else next(err);
};

exports.handle500s = (err, req, res, next) => {
  if (err) {
    res.status(500).send({ message: "Internal Server Error!" });
  }
};

exports.handleInvalidMethods = (req, res, next) => {
  res.status(405).send({ message: "Invalid Method" });
};
