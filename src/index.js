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
    //   unique: false,
    }
});

// CONNECT TO DB
let authorId = null;
sequelize
    .sync({ force: false }) // switch true to restart database
    .then(result=>{
        console.log('tables synchronized >>> '+result);
        return Author.create({
            first_name: "Miguel",
            last_name: "Cervantes"
        })
    })
    .then(author=>{
        authorId = author.id;
        console.log('Author created >> '+author);
        return author.createBook({
            name: "Don Quijote de La Mancha",
            isbn: "5621901800"
        })
    })
    .then(book=>{
        console.log("Book is >>"+book);
        return Book.findAll({ where: authorId })
    })
    .then(book=>console.log("The books in db are >>> "+book))
    .catch(error=>console.log('Tables dont sync because >> '+error));

module.exports = {
    Book,
    Author,
}
// TO DO : UNIQUE AUTHOR FOR MANY BOOKS WITHOUT VALIDATION ERRORS
// UNABLE TO ASSING A SECOND BOOK TO PRE-EXISTENT AUTHOR