const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Author = sequelize.define('author',{
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
    },
    first_name: {
        type: Sequelize.STRING,
        // unique: true, // VALIDATION ERROR
    },
    last_name: {
        type: Sequelize.STRING,
        // unique: true, // VALIDATION ERROR
    },
});

module.exports = Author;