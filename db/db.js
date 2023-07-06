const { Sequelize } = require("sequelize");
const pg = require("pg");
require('dotenv').config();
const database_name = 'backendsql';

const db = new Sequelize(process.env.POSTGRES_URL + "?sslmode=require");

module.exports = db;

 