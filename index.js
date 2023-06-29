const db = require('./db');

const syncDB = () => {
    db.sync({force: true});
};

syncDB();

module.exports = app;