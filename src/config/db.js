const Sequelize = require('sequelize');
require('dotenv').config();


// DB SETTINGS
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'db4free.net',
        dialect: 'mysql',
    });
console.log("username is >> "+process.env.DB_NAME);
module.exports = sequelize;