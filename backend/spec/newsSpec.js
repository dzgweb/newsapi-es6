const request = require("request");
const base_url = "http://localhost:3000/";

describe("Welcome to Express", () => {

  describe("GET /", () => {

    it("returns status code 200", (done) => {
      request.get(base_url, (error, response, body) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Welcome to Express", (done) => {
      request.get(base_url, (error, response, body) => {
        expect(body).toContain("Welcome to Express");
        done();
      });
    });
  });

});