const { Sequelize } = require('sequelize');
// const sequelize = require('sequelize'); // not erase until production // lo otro se generó automágicamente e igual no va
// IMPORT MODELS
const authorModel = require('../models/author')

// DB SETTINGS
const sequelize = new Sequelize(
        'sql11435874', // db name 
        'sql11435874', // db username
        'dTgg4ZN2lL', // db password
        {
            host: 'sql11.freesqldatabase.com',
            dialect: 'mysql'
        });

// AUTHOR MODEL
const author = authorModel(sequelize, Sequelize);
sequelize.sync({
    force: false, // false in beginning, migth force later
})
.then(()=>console.log('authors tables synchronized'));

module.exports = {
    author
}