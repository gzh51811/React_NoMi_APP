var express = require('express');
var router = express.Router();

const UserRouter = require('./users');
const LoginRouter = require('./login');
const ListRouter = require('./list');

router.use('/users',UserRouter);
router.use('/login',LoginRouter);
router.use('/list',ListRouter);

module.exports = router;
