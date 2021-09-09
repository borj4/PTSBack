const Sequelize = require('sequelize');

const dotenv = require('dotenv').config();

// DB SETTINGS
const sequelize = new Sequelize(
    process.env.dbName,
    process.env.dbUsername,
    process.env.dbPassword,
        {
            host: 'db4free.net',
            dialect: 'mysql',
        });

module.exports = sequelize;