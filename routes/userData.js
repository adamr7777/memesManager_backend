const express = require('express');

const {getUserData, updateUserData} = require('../controllers/mainUser');


const router = express.Router();

router.route('/mainUserData/:username').get(getUserData);
router.route('/mainUserData').post(updateUserData);



module.exports = router;