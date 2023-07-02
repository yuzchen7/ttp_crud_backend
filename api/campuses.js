const express = require('express');
const router = express.Router();
const { Campuses, Students } = require('../db/models');
const db = require('../db');

router.get('/', async (req, res, next) => {
    try {
      console.log('MESSAGE : allCampuses GETTING ALL CAMPUSES INFO FROM DATABASE')
      const allCampuses = await Campuses.findAll({
          attributes: [
              'id',
              'name',
              'imageUrl',
              'address',
              'description',
              [db.fn('count', db.col('students.id')), 'studentsNum']
            ],
            include: [{
              model: Students,
              attributes: []
            }],
            group: ['campuses.id']
          }
        ).catch(error => {
            console.error(error);
        });
        allCampuses ? res.status(200).json(allCampuses) : res.status(404).send("Campuses data not found");
    } catch (error) {
        next(error);
    }
});

module.exports = router;
