const router = require('express').Router();
const userRoutes = require('./user-route');
const postRoutes = require('./post-route')
const commentRoutes = require('./comment-route')

router.use('/comments', commentRoutes)
router.use('/posts', postRoutes)
router.use('/users', userRoutes);


module.exports = router;