import request from "supertest";
import App from "../App";

const server = new App().server;

describe("GET /", () => {
  test("status to be 200", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
  });

  test("text confirm", async () => {
    const res = await request(server).get("/");
    expect(res.text).toBe("<h1>Hello :)</h1>");
  });

  test("object confirm", async () => {
    const res = await request(server)
      .get("/message")
      .expect("Content-Type", /json/)
      .expect(200);
    expect(res.body).toMatchObject({ message: "Hello To :)" });
  });
});
