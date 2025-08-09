const request = require('supertest');
const app = require('../src/app.js');

describe('Hello World Tests', () => {
    it('should return true for a simple assertion', () => {
        expect(true).toBe(true);
    });
});

describe('Health check', () => {
    it('should return 200 OK on GET /', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200)
    });
});
