const request = require("supertest");
const app = require("../app");

describe("Temperature API", () => {
  test("should convert Celsius to Fahrenheit", async () => {
    const response = await request(app).get("/convert/0");

    expect(response.statusCode).toBe(200);
    expect(response.body.fahrenheit).toBe(32);
  });

  test("should convert 100 Celsius to 212 Fahrenheit", async () => {
    const response = await request(app).get("/convert/100");

    expect(response.statusCode).toBe(200);
    expect(response.body.fahrenheit).toBe(212);
  });

  test("should reject non-numeric temperature", async () => {
    const response = await request(app).get("/convert/hello");

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe("Temperature must be a number");
  });

  test("health check should return OK", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("OK");
  });
});
