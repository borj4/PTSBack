const Sequelize = require('sequelize');
const dotenv = require('dotenv').config();


// DB SETTINGS
const sequelize = new Sequelize(
    'brazuelo',
    'brazuelo',
    'soamee1pt',
    // process.env.DB_NAME,
    // process.env.DB_USER,
    // process.env.DB_PASS,
    {
        host: 'db4free.net',
        dialect: 'mysql',
    });
// console.log(process.env.DB_NAME);
module.exports = sequelize;