const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const UserDb = require('../model/UsersData');

const loginUser = async (req, res)=> {
    const {username, password} = req.body.auth;
    if(!username || !password) return res.status(400).json({msg: 'username and password are required'}) //create custom error

    try {
        const person = await UserDb.findOne({username});
        if(!person) return res.status(401).json({msg: 'User Not Found'});
        const {encryptedPwd} = person
        const passMatched = await bcrypt.compare(password, encryptedPwd);
        const personName = person.username;
        if (passMatched) {
            const token = jwt.sign({username: personName}, process.env.SECRET, {expiresIn: '6h'});
            res.status(200).json({personName, encryptedPwd, token});
        }
        else return res.status(401).json({msg: 'Wrong Password'});
    } catch(err) {
        res.sendStatus(401);
    }
};

module.exports = loginUser;