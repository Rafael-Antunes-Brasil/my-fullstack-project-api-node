const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('teste', 'postgres', '123456', {
  host: 'localhost',
  dialect: 'postgres',
})

module.exports = sequelize;