const request = require("supertest");
const jwt = require("jsonwebtoken");
const server = require("../api/server.js");

describe('server.js', () => {
    it("login", function () {
        const login = "Q"
        return request(server)
            .post("/api/auth/login")
            .send({ username: login, password: login })
            .then(res => {
                expect(res.status).toBe(200);
                expect(res.body.message).toBe(`Welcome ${login}!`)
                expect(res.type).toMatch(/json/i)
            });
    });
    it("login", function () {
        const login = "Q"
        return request(server)
            .post("/api/auth/login")
            .send({ username: login, password: login })
            .then(res => {
                expect(res.type).toMatch(/json/i)
            });
    });
    it("login", function () {
        const login = "Q"
        return request(server)
            .post("/api/auth/login")
            .send({ username: login, password: login })
            .then(res => {

                expect(res.body.message).toBe(`Welcome ${login}!`)

            });
    });
    describe('server.js', () => {
        it("register", function () {
            return request(server)
                .post("/api/auth/register")
                .send({ username: "W", password: "W" })
                .then(res => {
                    console.log("res.body", res.body)
                    expect(res.status).toBe(201);
                });
        });
    });
    describe('server.js', () => {
        it("register", function () {
            return request(server)
                .post("/api/auth/register")
                .send({ username: "X", password: "X" })
                .then(res => {
                    console.log("res.body", res.body)
                    expect(res.type).toMatch(/json/i)
                });
        });
    });
});
