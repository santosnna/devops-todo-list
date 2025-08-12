// tests/taskRoutes.test.js
const request = require('supertest');
const express = require('express');
const taskRoutes = require('../src/routes/taskRoutes');

describe('GET /tasks', () => {
  let app;

  beforeEach(() => {
    app = express();
    app.use('/tasks', taskRoutes); // Mounts the router in the test app and prefixes it with /tasks (same as in the real app)
  });

  it('should return status 200 and { message: "Ok" }', async () => {
    const res = await request(app).get('/tasks');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Ok' });
  });

  it('should return status 500 if an error occurs inside the route', async () => {
    const errorApp = express();

    // Middleware to inject an error on the FIRST call to res.json()
    errorApp.use((req, res, next) => {
      const originalJson = res.json.bind(res);
      let first = true;
      res.json = (body) => {
        if (first) {
          first = false;
          throw new Error('Simulated failure in res.json');
        }
        return originalJson(body);
      };
      next();
    });

    errorApp.use('/tasks', taskRoutes); // Mounts the router in the test app and prefixes it with /tasks (same as in the real app)

    const res = await request(errorApp).get('/tasks');
    expect(res.status).toBe(500);
    expect(res.body).toEqual({ message: 'Error searching for tasks' });
  });
});
