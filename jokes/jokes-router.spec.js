const request = require('supertest');
const server = require('../api/server')

const db = require('../database/dbConfig')

describe('jokes-router.js', () => {

    afterEach(async () => {
        await db('users').truncate();
    });

    describe('get all jokes', () => {
        it('should', function () {
            const formData = { username: "A", password: "A" }
            return request(server)
                .post('/api/auth/register')
                .send(formData)
                .then(res => {
                    return request(server)
                        .post('/api/auth/login')
                        .send(formData)
                        .then(res => {
                            const token = res.body.token
                            console.log(token)
                            return request(server)
                                .get('/api/jokes')
                                .set({ token })
                                .then(res => {
                                    expect(res.status).toBe(200)
                                })
                        });
                });
        })
    });


    describe('get all jokes', () => {

        it('should', function () {
            const formData = { username: "B", password: "B" }
            return request(server)
                .post('/api/auth/register')
                .send(formData)
                .then(res => {
                    return request(server)
                        .post('/api/auth/login')
                        .send(formData)
                        .then(res => {
                            const token = res.body.token
                            console.log(token)
                            return request(server)
                                .get('/api/jokes')
                                .set({ token })
                                .then(res => {
                                    expect(Array.isArray(res.body)).toBe(true)
                                })
                        });
                });
        })
    });
});