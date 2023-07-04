const { Sequelize } = require("sequelize");
const database_name = 'backendsql';

const db = new Sequelize(`postgres://localhost:5432/${database_name}`, {
    logging : false
});

module.exports = db;

 