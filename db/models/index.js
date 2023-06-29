const Campuses = require('./campuses');
const Students = require('./students');

// relationship between students and Campueses
Campuses.hasMany(Students);
Students.belongsTo(Campuses);

module.exports = {
    Campuses, Students
};