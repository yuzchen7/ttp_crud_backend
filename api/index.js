const router = require('express').Router();

console.log('current api router')

router.use('/students', require('./students'));
router.use('/campuses', require('./campuses'));

router.use((req, res, next) => {
    const error = new Error('Not Found Error');
    error.status = 404;
    next(error);
});

module.exports = router;