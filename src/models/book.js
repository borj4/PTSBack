const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Book = sequelize.define('book',{
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false,
        unique: true,
    },
    name:  {
        type: Sequelize.STRING,
        // unique: false,
    },
    isbn:  {
        type: Sequelize.STRING,
        // unique: true,
    },
}); 

module.exports = Book;