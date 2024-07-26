const Sequelize = require("sequelize");

const sequelize = new Sequelize("testing_db", "root", "Password!123", {
	dialect: "mysql",
	host: "localhost",
});

module.exports = sequelize;
