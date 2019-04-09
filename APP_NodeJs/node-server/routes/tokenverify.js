const express = require('express');
const {verify} = require('../utils/token');
const bodyParser = require('body-parser');
// 创建路由
var router = express.Router();
// 创建urlencoded 编码解析（把请求头content-type值为application/x-www-form-urlencoded时的数据格式化到request.body中）
const urlencodedParser = bodyParser.urlencoded({
    extended: false
});

// 创建json编码解析（把请求头content-type值为application/json时的数据格式化到request.body中）
const jsonParser = bodyParser.json();

router.post('/',urlencodedParser,jsonParser,async (req,res)=>{
    // 验证token
    let {token} = req.body.params;
    let str = verify(token);
    if(str){
        // 验证成功
        res.send({
            code:0
        })
    }else{
        // 验证失败
        res.send({
            code:1
        })
    }
})
module.exports = router;