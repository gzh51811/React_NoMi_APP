var express = require('express');
var router = express.Router();

const UserRouter = require('./users');
const LoginRouter = require('./login');
//验证token
const tokenverifyRouter = require('./tokenverify');

router.use('/users',UserRouter);
router.use('/login',LoginRouter);
router.use('/tokenverify', tokenverifyRouter);

module.exports = router;
