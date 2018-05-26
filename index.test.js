const app = require('./app');
const server = app.listen();
const request = require('supertest');

describe('router', () => {
  afterEach(() => server.close());
  describe('when GET /route', () => {
    test('should say hello route', async () => {
      const res = await request(server).get('/route');
      expect(res.text).toEqual('hello route');
    });
  });
});
