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

// CONNECT TO DB
// let authorId = null;
// sequelize
//     .sync({ force: false }) // switch true to restart database
//     .then(result=>{
//         console.log('tables synchronized >>> '+result);
//         return Author.create({
//             first_name: "Eduardo",
//             last_name: "Mendoza"
//         })
//     })
//     .then(book=>{
//         authorId = book.id;
//         console.log('Author created >> '+book);
//         return book.createBook({
//             name: "Sin noticias de Gurb",
//             isbn: "5611901800"
//         })
//     })
//     .then(book=>{
//         console.log("Book is >>"+book);
//         return Book.findAll({ where: authorId })
//     })
//     .then(book=>console.log("The books in db are >>> "+book))
//     .catch(error=>console.log('Tables dont sync because >> '+error));

module.exports = {
    Book,
    Author,
}
// TO DO : UNIQUE AUTHOR FOR MANY BOOKS WITHOUT VALIDATION ERRORS
// UNABLE TO ASSING A SECOND BOOK TO PRE-EXISTENT AUTHOR