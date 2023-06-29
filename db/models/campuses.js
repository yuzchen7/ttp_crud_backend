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
        type : DataTypes.TEXT,
        defaultValue : 'https://media.istockphoto.com/id/1350696625/vector/education-emblem-with-book-and-graduation-cap.jpg?s=612x612&w=0&k=20&c=5jy03wNwUbwz4UmbQkHwpubd5TtNmTVAXeCKVM806Sw='
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
    
}, 

{
    timestamps : false
}

);

module.exports = Campuses;