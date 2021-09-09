const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Author = sequelize.define('author',{
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false,
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING
});

module.exports = Author;