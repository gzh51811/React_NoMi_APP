var express = require('express');
var router = express.Router();

const UserRouter = require('./users');
const LoginRouter = require('./login');
<<<<<<< HEAD
//验证token
const tokenverifyRouter = require('./tokenverify');

router.use('/users',UserRouter);
router.use('/login',LoginRouter);
router.use('/tokenverify', tokenverifyRouter);
=======
const ListRouter = require('./list');

router.use('/users',UserRouter);
router.use('/login',LoginRouter);
router.use('/list',ListRouter);
>>>>>>> ling

module.exports = router;
