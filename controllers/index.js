const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoute = require('./home-route');
const dashboardRoute = require('./dashboard-route');

router.use('/', homeRoute);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoute);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;