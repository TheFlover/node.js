const express = require('express');
const UserController = require('./UserController');

const router = express.Router();

router.route("/users")
    .get([
        UserController.reasAll
    ])
    
module.exports = router;