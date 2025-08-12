// tests/health.test.js
const request = require('supertest');
const app = require('../src/app.js');

describe('Health check', () => {
    it('should return 200 OK on GET /health', async () => {
        const res = await request(app).get('/health');
        expect(res.statusCode).toBe(200);
    });
});