const router = require('express').Router();
const userRoute = require('./user-route');
const commRoute = require('./comment-route');
const postRoute = require('./post-route');

router.use('/users', userRoute);
router.use('/comments', commRoute);
router.use('/posts', postRoute);

module.exports = router;