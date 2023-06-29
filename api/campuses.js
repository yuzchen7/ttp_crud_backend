const express = require('express');
const router = express.Router();
const { Campuses } = require('../db/models');

router.get('/', async (req, res, next) => {
    try {
        const allCampuses = await Campuses.findAll();
        allCampuses ? res.status(200).json(allCampuses) : res.status(404).send("Campuses data not found");
    } catch (error) {
        next(error);
    }
});

module.exports = router;
