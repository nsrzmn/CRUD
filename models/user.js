const Sequelize = require("sequelize");
const sequelize = require("../util/database");




const Users = sequelize.define("user", {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true,
    }, 
    name:{
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    password:{
        type: Sequelize.STRING,
        allowNull: false,
    }, 
    contact:{
        type: Sequelize.INTEGER,
        allowNull: false,
    },  
    email:{
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Users;