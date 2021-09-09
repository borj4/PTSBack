const Sequelize = require('sequelize'); //maybe destructured

// DB SETTINGS
const sequelize = new Sequelize(
        'database-1', // db name 
        'admin', // db username
        'soamee1pt', // db password
        {
            host: 'database-1.csafvftyick0.us-east-2.rds.amazonaws.com',
            port: 3306,
            dialect: 'mysql',
        });

module.exports = sequelize;