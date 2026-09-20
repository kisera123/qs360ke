const express = require('express');
const contentRoutes = require('../modules/content/content.routes');

const router = express.Router();
router.use('/', contentRoutes);

module.exports = router;
