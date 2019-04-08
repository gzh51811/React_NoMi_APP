const jwt = require('jsonwebtoken');

let privateKey = 'chen'; //密钥

// 生产token
exports.create = (username, expiresIn = '24h') => {
    // username: 用于加密的用户名
    // expiresIn: token有效期(单位: s)，默认2小时
    // privateKey：用于加密的私钥
    let token = jwt.sign({
        username
    }, privateKey, {
        expiresIn
    });
    return token;
}

// 验证token
exports.verify = (token) => {
    let res = false;
    try {
        res = jwt.verify(token, privateKey);
    } catch (err) {
        res = false;
    }
    return res;
}