const Campueses = require('./campuses');
const Students = require('./students');

// relationship between students and Campueses
Students.hasOne(Campueses);
Campueses.hasMany(Students);

module.exports = {
    Campueses, Students
};