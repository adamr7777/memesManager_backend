const jwt = require('jsonwebtoken');
const {v4: uuid} = require('uuid');
const fs = require('fs');
const path = require('path');

const createLogin = async (req, res)=> {
    const {username, password} = req.body;
    if(!username || !password) return //create custom error
    const secret = uuid();
    const secretData = `\n${username}=${secret}`;
    try {
        fs.appendFileSync(path.join(__dirname, '..', '.env'), secretData);
        console.log('written');
    }
    catch(error) {
        console.error(error);
    };

    const token = jwt.sign({username, password}, secret, {expiresIn: '30'})
    res.json({msg: 'user created', token});
};

module.exports = createLogin;