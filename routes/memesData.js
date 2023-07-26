const express = require('express');

const sendMemesData = require('../controllers/sendMemesData');

const router = express.Router();


router.get('/', sendMemesData);


module.exports = router;