const request = require('supertest');
const app = require('../index');
const { sequelize, Item } = require('../models/item');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

test('should fetch all items', async () => {
  await Item.create({ name: 'Test Item', description: 'Test Description' });
  const response = await request(app).get('/api/items');
  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveLength(1);
});

test('should create a new item', async () => {
  const response = await request(app).post('/api/items').send({
    name: 'New Item',
    description: 'New Description',
  });
  expect(response.statusCode).toBe(201);
  expect(response.body.name).toBe('New Item');
});
