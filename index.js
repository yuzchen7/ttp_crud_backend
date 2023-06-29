const express = require('express');
const db = require('./db');
// const seed = require('./seed');
const PORT = "8080";

const app = express();

const syncDB = () => {
    db.sync({force: true});
};

const severRun = () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

severRun();
syncDB();

module.exports = app;
