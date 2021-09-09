module.exports = (sequelize, type) => sequelize.define('author',{
    id: {
        type: type.INTEGER,
        primarykey: true,
        autoIncrement: true
    },
    name: type.STRING,
    lisbn: type.STRING
}); 