const bcrypt = require('bcrypt');

const UserDb = require('../model/UsersData'); //Schema







const createLogin = async (req, res)=> {
    const {username, password} = req.body.auth;
    const dublicate = await UserDb.findOne({username});
    if(dublicate) return res.status(409).json({msg: 'The Username Already Exists'});

        const encryptedPwd = await bcrypt.hash(password, 10);
    
        try {
            await UserDb.create({username, encryptedPwd, userMemes: []});
        } catch(err) {
            console.error(err);
        };
        res.status(200);
    
};

module.exports = createLogin;