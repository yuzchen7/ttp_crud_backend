const { DataTypes } = require('sequelize');
const db = require('../db');

const Campuses = db.define('campuses', {
    name : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    },

    imageUrl : {
        type : DataTypes.STRING,
        defaultValue : './'
    },

    address : {
        type : DataTypes.STRING,
        allowNull : false,
        validate : {
            notEmpty : true
        }
    }, 

    description : {
        type : DataTypes.TEXT,
    }
    
});

module.exports = Campuses;