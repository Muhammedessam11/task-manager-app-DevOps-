const { Sequelize } = require('sequelize');

// Database connection
const sequelize = new Sequelize('tasks_db', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;

