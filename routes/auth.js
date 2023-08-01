const express = require('express');

const createLogin = require('../controllers/createLogin');
const loginUser = require('../controllers/loginUser');

const router = express.Router();



router.route('/register').post(createLogin);
router.route('/login').post(loginUser);

module.exports = router;