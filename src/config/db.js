const Sequelize = require('sequelize');

// const dotenv = require('dotenv').config({path: ('./.env')});
const dotenv = require('dotenv').config();


// DB SETTINGS
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'db4free.net',
        dialect: 'mysql',
    });

module.exports = sequelize;