const router = require('express').Router();
const { Gallery, Painting } = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');



module.exports = router;
