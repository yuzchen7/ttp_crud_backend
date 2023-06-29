const express = require('express');
const router = express.Router();
const { Students } = require('../db/models'); 

router.get('/', async (req, res, next) => {
    try {
        console.log("student rounter")
        const allStudent = await Students.findAll();
        allStudent ? res.status(200).json(allStudent) : res.status(404).send("Student Data not found");
    } catch (error) {
        next(error);
    }
});

module.exports = router;