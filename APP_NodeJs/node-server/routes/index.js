var express = require('express');
var router = express.Router();

const UserRouter = require('./users');
const LoginRouter = require('./login');
const ListRouter = require('./list');
//验证token
const tokenverifyRouter = require('./tokenverify');

router.use('/users',UserRouter);
router.use('/login',LoginRouter);
router.use('/tokenverify', tokenverifyRouter);
router.use('/list',ListRouter);

module.exports = router;
