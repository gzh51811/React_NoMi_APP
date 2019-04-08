const express = require('express');
var router = express.Router();
const db = require('../db');
const bodyParser = require('body-parser');
const token = require('../utils/token');

// 创建urlencoded 编码解析（把请求头content-type值为application/x-www-form-urlencoded时的数据格式化到request.body中）
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

// 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）
const jsonParser = bodyParser.json();

router.post('/',jsonParser,urlencodedParser,async (req,res)=>{
    // 登录接口
    let {username,password} = req.body.params;
    let str = await db.find('user',{username,password});
    if(str.length>0){
        let _token = token.create(username);
        res.send({
            username:str[0].username,
            _id:str[0]._id,
            token:_token,
            code:0
        })
    }else{
        res.send({code:1});
    }
    
})
module.exports = router;