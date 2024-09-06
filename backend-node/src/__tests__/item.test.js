const request = require('supertest');
const app = require('../index');
const { sequelize, Item } = require('../models/item');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

test('should fetch all items', async () => {
  await Item.create({ name: 'Test Item', description: 'Test Description' });
  const response = await request(app).get('/items');
  expect(response.statusCode).toBe(200);
  expect(response.body).toHaveLength(1);
});
