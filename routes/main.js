const express = require('express');

const sendMemesData = require('../controllers/sendMemesData');

const router = express.Router();


router.route('/').get(sendMemesData);


module.exports = router;