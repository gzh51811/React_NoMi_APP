var express = require('express');
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

router.post('/',jsonParser,urlencodedParser,async (req, res) => {
    // 注册接口
    let {username,password,code} = req.body.params;
    // console.log(1,username,code);
    if(code == 1){
        let str = await db.find('user',{username});
        console.log(str.length);
        if(str.length>0){
            res.send('该用户已被注册');
        }else{
            res.send('该用户可以注册');
        }
    }else if(code == 2){
        // console.log(username,password,code);
        let str = await db.find('user',{username});
        if(str.length > 0){
            res.send('该用户已注册');
        }else{
            let str2 = await db.insert('user',{username,password});
            res.send(str2);
        }
    }
});

module.exports = router;
