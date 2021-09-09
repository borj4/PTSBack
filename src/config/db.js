const Sequelize = require('sequelize');

const dotenv = require('dotenv').config();

// DB SETTINGS
const sequelize = new Sequelize(
    process.env.dbName,
    process.env.dbUsername,
    process.env.dbPassword,
        {
            host: 'database-1.csafvftyick0.us-east-2.rds.amazonaws.com',
            port: 3306,
            dialect: 'mysql',
        });

module.exports = sequelize;