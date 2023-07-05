const express = require('express');
const router = express.Router();
const { Campuses, Students } = require('../db/models'); 

router.get('/', async (req, res, next) => {
    try {
        console.log("student rounter")
        const allStudent = await Students.findAll({ include : Campuses });
        console.log("allStudent : ", allStudent);
        allStudent ? res.status(200).json(allStudent) : res.status(404).send("Student Data not found");
    } catch (error) {
        next(error);
    }
});


router.post('/enrollCampusStuent', async (req, res, next) => {
    try {
        console.log('MESSAGE : transCampusStuent UPDATE STUDENT CAMPUS INFO FROM DATABASE');
        console.log('data come : ', req.body);
        await Students.update(
            {
                campusId : req.body.campusId
            },
            {
                where : {
                    id : req.body.id
                }
            }
        ).catch(err => {
            console.error(err);
        });
        res.status(200);
    } catch (err) {
        console.error(err);
    }
});


router.get('/findStudent', async (req, res, next) => {
    try {
        console.log('MESSAGE : findStuent GETTING SINGLE STUDENT INFO FROM DATABASE');
        var query = req.query;
        const singleStudent = await Students.findAll(
            {
                include : {
                    model : Campuses
                },
                where : {
                    id : query.id
                }
            }
        ).catch(error => {
            console.error(error);
        });
        console.log(singleStudent);
        singleStudent ? res.status(200).json(singleStudent) : res.status(404).send("Student Data not found");
    } catch (err) {
        next(err);
    }
});
  

module.exports = router;