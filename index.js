const cors = require('cors');

const express = require('express');
const db = require('./db');
const PORT = "8080";

const app = express();

app.use(cors())

const syncDB = () => {
    db.sync({force: true});
};

const severRun = () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${ PORT }`);
    });
};

app.use('/api', require('./api'));

severRun();
syncDB();

module.exports = app;
