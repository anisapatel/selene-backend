const app = require("../app");
const request = require("supertest");
const chai = require("chai");
const chaiSorted = require("chai-sorted");
const { expect } = chai;
chai.use(chaiSorted);

describe("/api", () => {
  it("status: 200, creates an product", () => {
    return request(app)
      .post("/api/users")
      .send({ name: "Shirt", description: "Checked", price: 20 })
      .expect(200)
      .then(({ body }) => {
        console.log(body, "<--");
        expect(body.product).to.be.an("object");
      });
  });
});
