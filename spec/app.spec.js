process.env.NODE_ENV = "test";
const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;
const app = require("../app");
const Product = require("../models/productsModel");
const User = require("../models/usersModel");

// before((done) => {
//   let product;
//   //use an instance of your model to write a test
//   product = Product.create({
//     name: "Tweed Skirt",
//     description: "Tweed woollen material",
//     price: "18",
//   }).then(() => done());
// });
describe("/api", () => {
  describe("/users", () => {
    describe("POST", () => {
      let product;
      it("status: 201, returns the product that has been created", (done) => {
        request(app)
          .post("/api/users")
          .send({
            name: "Silk blouse",
            description: "Ivory buttoned",
            price: 20,
          })
          .end((err, res) => {
            product = res.body.product;
            expect(res.status).to.eq(201);
            expect(product.name).to.eq("Silk blouse");
            expect(product).to.be.an("object");
            expect(product).to.contain.property("description");
            expect(product).to.contain.property("_id");
            done();
          });
      });
    });
    describe("PATCH", () => {
      it("status: 200, responds with the updated product based on product id", (done) => {
        let newProduct = new Product({
          name: "Tweed Skirt",
          description: "Tweed woollen material",
          price: "18",
        });
        newProduct.save((err, product) => {
          request(app)
            .patch("/api/users/" + product.id)
            .send({
              name: "Silk blouse",
              description: "Gold buttoned",
              price: 25,
            })
            .end((err, res) => {
              product = res.body.product;
              expect(res.status).to.eq(200);
              expect(product.name).to.eq("Silk blouse");
              expect(product).to.be.an("object");
              expect(product).to.contain.property("description");
              expect(product).to.contain.property("_id");
              done();
            });
        });
      });
    });
    describe("DELETE", () => {
      it("status: 204, deletes a product based on product id", (done) => {
        let newProduct = new Product({
          name: "Skirt",
          description: "Woollen material",
          price: "19",
        });
        newProduct.save((err, product) => {
          request(app)
            .delete("/api/users/" + product.id)
            .end((err, res) => {
              expect(res.status).to.eq(204);
              done();
            });
        });
      });
    });
  });
  describe("/products", () => {
    describe("GET", () => {
      it("status: 200, returns an array of products", (done) => {
        request(app)
          .get("/api/products")
          .end((err, res) => {
            expect(res.status).to.eq(200);
            expect(res.body).to.be.an("array");
            done();
          });
      });
    });
    describe("GET/:id", () => {
      it("status: 200, responds with the product based on product id", (done) => {
        let newProduct = new Product({
          name: "Tweed Skirt",
          description: "Tweed woollen material",
          price: "18",
        });
        newProduct.save((err, product) => {
          request(app)
            .get("/api/products/" + product.id)
            .end((err, res) => {
              product = res.body.product;
              expect(res.status).to.eq(200);
              expect(product.price).to.eq(18);
              expect(product).to.be.an("object");
              expect(product).to.contain.property("description");
              expect(product).to.contain.property("_id");
              done();
            });
        });
      });
    });
  });
});

after((done) => {
  Product.remove({}).then(() => done());
});
