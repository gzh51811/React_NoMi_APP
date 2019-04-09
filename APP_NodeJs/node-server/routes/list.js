var express = require('express');
var router = express.Router();

var db = require('../db')

router.get('/',async (req, res, next)=>{
    let {qty,limit} = req.query;

    let data =await db.find('list',{},qty*1,limit*1);

    console.log(qty,limit)
    res.send(data);
});

module.exports = router;
