import request from 'supertest';
import {app, Shutdown} from '../../src/server';

describe('Testing Server', () => {
  it('Start and has the proper test environment', async () => { 
    expect(process.env.NODE_ENV).toBe('test');
    expect(app).toBeDefined();

  }, 10000);

  it('Returns all options allowed to be called by customers', async () => { 
    const response = await request(app).options('/');

    expect(response.status).toBe(200);
    expect(response.headers['access-control-allow-methods']).toBe('GET, POST, PUT, DELETE, PATCH')
  });

  it('should return 404', async () => {
    const response = await request(app).get('/not-found');
    expect(response.status).toBe(404);
  });

  afterAll((done) => {
     Shutdown(done);
  });
});