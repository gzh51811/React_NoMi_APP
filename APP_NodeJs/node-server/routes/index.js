var express = require('express');
var router = express.Router();

const UserRouter = require('./users');
const LoginRouter = require('./login');

router.use('/users',UserRouter);
router.use('/login',LoginRouter);

module.exports = router;
