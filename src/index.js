// const { Sequelize } = require('sequelize/types'); //prueba. esto funcionaba
const Sequelize = require('sequelize')
const sequelize = require('./config/db')
const Author = require('./models/author')
const Book = require('./models/book')

// RELATIONSHIPS
Author.hasMany(Book,{
    foreignKey: {
      name: 'author',
      allowNull: false,
    }
});

module.exports = {
    Book,
    Author,
}
// TO DO : UNIQUE AUTHOR FOR MANY BOOKS WITHOUT VALIDATION ERRORS
// UNABLE TO ASSING A SECOND BOOK TO PRE-EXISTENT AUTHOR