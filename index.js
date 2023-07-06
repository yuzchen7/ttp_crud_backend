const cors = require('cors');

const express = require('express');
const db = require('./db');
const PORT = "8080";

const app = express();

app.use(cors());
app.use(express.json());

const syncDB = () => {
    db.sync();
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
