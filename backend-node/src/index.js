const express = require('express');
const sequelize = require('./config/database');
const Item = require('./models/item');

const app = express();
app.use(express.json());

// Routes
app.get('/items', async (req, res) => {
  const items = await Item.findAll();
  res.json(items);
});

app.post('/items', async (req, res) => {
  const item = await Item.create(req.body);
  res.status(201).json(item);
});

// Sync and start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log(`Server is running on port ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
});
