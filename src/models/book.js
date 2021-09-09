const Sequelize = require('sequelize');
const sequelize = require('../config/db');

const Book = sequelize.define('book',{
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV1,
        primaryKey: true,
        allowNull: false,
    },
    name: Sequelize.STRING,
    isbn: Sequelize.STRING,
}); 

module.exports = Book;