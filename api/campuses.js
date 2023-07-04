const express = require('express');
const router = express.Router();
const { Campuses, Students } = require('../db/models');
const db = require('../db');

router.get('/', async (req, res, next) => {
  try {
    console.log('MESSAGE : allCampuses GETTING ALL CAMPUSES INFO FROM DATABASE');
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


// find single campus
router.get('/findCampus', async (req, res, next) => {
  try {
    console.log('MESSAGE : findCampus GETTING ALL CAMPUSES INFO FROM DATABASE');
    var query = req.query;
    const campus = await Campuses.findAll({
      include: {
        model: Students
      },
      where: {
        id: query.id
      }
    }).catch(error => {
      console.error(error);
    });
    campus ? res.status(200).json(campus) : res.status(404).send("Campus data not found");
  } catch (error) {
    next(error);
  }
});


// insert a campus record
router.post('/insertCampus', async (req, res, next) => {
  try {
    console.log('MESSAGE : insertCampus INSERT CAMPUS INTO DATABASE');
    await Campuses.create(req.body).catch(err => {
      console.error(err);
    });
    return res.status(200);
  } catch (err) {
    next(err);
  }
});


//edit cmapus record
router.post('/editCampus', async (req, res, next) => {
  // console.log(req.body);
  try {
    console.log('MESSAGE : editCampus UPDTAE EDIT CAMPUS INTO DATABASE');
    const editCampus = req.body;
    Campuses.update( 
      {
        name : editCampus.name,
        address : editCampus.address,
        imageUrl : editCampus.imageUrl,
        description : editCampus.description
      },
      {
        where : {
          id : editCampus.id
        }
      }
    ).catch(err => {
      console.error(err);
    });
    return res.status(200);
  } catch (err) {
    next(err);
  }
});


// delete campus record
router.delete('/deleteCampus', (req, res, next) => {
  try {
    console.log('MESSAGE : deleteCampus DELETE CAMPUS IN DATABASE');
    Campuses.destroy({
      where : {
        id : req.query.id
      }
    });
    return res.status(200);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
