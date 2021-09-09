module.exports = (sequelize, type) => sequelize.define('author',{
    id: {
        primarykey: true,
        type: type.INTEGER,
        autoIncrement: true
    },
    first_name: type.STRING,
    last_name: type.STRING
}); 