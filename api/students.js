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
            next(err);
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
            next(error);
        });
        singleStudent ? res.status(200).json(singleStudent) : res.status(404).send("Student Data not found");
    } catch (err) {
        next(err);
    }
});
  

router.post('/insertStudent', async (req, res, next) => {
    try {
        console.log('MESSAGE : insertStudent INSERT STUDENT INFO FROM DATABASE');
        const insertData = req.body;
        await Students.create(insertData).catch(error => {
            next(error);
        })
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
});


router.post('/editStudent', async (req, res, next) => {
    try {
        console.log('MESSAGE : editStudent EDIT STUDENT INFO FROM DATABASE');
        const editData = req.body;
        await Students.update(
            {
                firstName : editData.firstName,
                LastName : editData.lastName,
                email : editData.email,
                imageUrl : editData.imageUrl,
                gpa : editData.gpa,
                campusId : editData.campusId
            },
            {
                where : {
                    id : editData.id
                }
            }
        ).catch(
            error => {console.error(error);
            next(error);
        })
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
});


router.delete('/deleteStudent', async (req, res, next) => {
    try {
        console.log('MESSAGE : deleteStudent DElETE STUDENT INFO FROM DATABASE');
        await Students.destroy({
            where : {
                id : req.query.id
            }
        }).catch(error => {
            console.error(error);
            next(error);
        });
        res.sendStatus(200);
    } catch (err) {
        next(err);
    }
});


module.exports = router;