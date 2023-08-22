const fsPromises = require('fs').promises;
const bcrypt = require('bcrypt')
const path = require('path');
const jwt = require('jsonwebtoken');

const usersDb = {
    users: require('../model/users.json'),
    setUsers: function(data) {this.users = data}
};

const loginUser = async (req, res)=> {
    const {username, password} = req.body.auth;
    if(!username || !password) return res.status(400).json({msg: 'username and password are required'}) //create custom error

    try {
        const person = usersDb.users.find((person)=> person.username === username);
        if(!person) return res.status(401).json({msg: 'user not found'});
        const passMatched = await bcrypt.compare(password, person.encryptedPwd);
        if (passMatched) {
            const token = jwt.sign({person}, process.env.SECRET, {expiresIn: '1h'});
            res.cookie('jwt', token, {httpOnly: true, sameSite: 'None', maxAge: 60 * 60 * 1000});
            res.status(200).json({msg: `user ${username} is logged in.`});
        }
        else return res.status(401).json({msg: 'wrong password'});
    } catch(err) {
        res.status(401).json({msg: err});
    }
};

module.exports = loginUser;