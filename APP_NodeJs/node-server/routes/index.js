var express = require('express');
var router = express.Router();

const UserRouter = require('./users');

router.use('/users',UserRouter);

module.exports = router;
