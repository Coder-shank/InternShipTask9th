const request = require("supertest");
const app = require("../app");  // app.js ko import kar rahe
const mongoose = require("mongoose");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Auth Endpoints", () => {
  it("should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        username: "testuser",
        email: "testuser@gmail.com",
        password: "123456"
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("_id");
  });

  it("should login a user", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "testuser@gmail.com",
        password: "123456"
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("token");
  });
});
