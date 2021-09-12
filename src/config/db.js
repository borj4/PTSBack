const Sequelize = require('sequelize');
require('dotenv').config({path: ('../../.env')});


// DB SETTINGS
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'db4free.net',
        dialect: 'mysql',
    });
console.log(process.env.DB_NAME);
module.exports = sequelize;