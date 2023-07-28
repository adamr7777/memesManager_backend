const express = require('express');

const createLogin = require('../controllers/createLogin');

const router = express.Router();



router.route('/register').post(createLogin);

module.exports = router;