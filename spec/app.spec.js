process.env.NODE_ENV = "test";
const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const { app } = require("../app");
const Product = require("../models/productsModel");
const User = require("../models/usersModel");

let product;
before((done) => {
  //use an instance of your model to write a test
  product = Product.create({
    name: "skirt",
    description: "green flared",
    price: "15",
  }).then(() => done());
});

describe("/api", () => {
  describe("/users", () => {
    let product;
    describe("POST", () => {
      it("status: 200, returns the product that has been created", (done) => {
        request(app)
          .post("/api/users")
          .send({ name: "Shirt", description: "Green", price: 20 })
          .end((err, res) => {
            console.log(res, "<--");
            product = res.body;
            console.log(res.body, "<--res");
            expect(res.status).to.eq(200);
            expect(res.body.name).to.eq("Shirt");
            done();
          });
      });
    });
  });
});

after((done) => {
  Product.deleteMany({}).then(() => done());
});
