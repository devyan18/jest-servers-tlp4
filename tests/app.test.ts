import { app } from '../src/app';
import request from 'supertest';

it('should return "Getter"', async () => {
  const response = await request(app).get('/');

  expect(response.status).toBe(200);
  expect(response.text).toBe('Getter');
});

describe('GET /test', () => {
  type User = {
    id: number;
    name: string;
  };

  it('should return JSON', async () => {
    const response = await request(app).get('/test');

    expect(response.status).toBe(200);

    expect(response.body).toContainEqual<User>({ id: 1, name: 'John' });

    expect(response.body).toHaveLength(2);
  });
});

describe('POST /', () => {
  it('should return "Creator"', async () => {
    const response = await request(app).post('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Creator');
  });
});

describe('PUT /', () => {
  it('should return "Updater"', async () => {
    const response = await request(app).put('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Updater');
  });
});

describe('DELETE /', () => {
  it('should return "Deleter"', async () => {
    const response = await request(app).delete('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Deleter');
  });
});
