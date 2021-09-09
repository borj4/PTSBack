const sequelize = require('./config/db')
const Author = require('./models/author')
const Books = require('./models/book')

// RELATIONSHIPS
Author.hasMany(Books);

// CONNECT TO DB
sequelize
    .sync({ force: true })
    .then((result)=>console.log('tables synchronized >>> '+result))
    .catch(error=>console.log('tables dont sync because >> '+error));

