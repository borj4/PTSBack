const sequelize = require('./config/db')
const Author = require('./models/author')
const Books = require('./models/book')

// RELATIONSHIPS
Author.hasMany(Books);

// CONNECT TO DB
sequelize
    .sync({ force: false })
    .then((result)=>console.log('authors tables synchronized >>> '+result))
    .catch(error=>console.log('authors tables not sync because >> '+error));

