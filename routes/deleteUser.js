const express = require('express');

const deleteUser = require('../controllers/deleteUser');




const router = express.Router();


router.route('/:username').delete(deleteUser);

module.exports = router;