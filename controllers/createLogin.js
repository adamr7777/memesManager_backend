const fsPromises = require('fs').promises;
const bcrypt = require('bcrypt')
// const path = require('path');

const UserDb = require('../model/UsersData'); //Schema

// const usersDb = {
//     users: [],
//     setUsers: function(data) {this.users = data}
// };





const createLogin = async (req, res)=> {
    const {username, password} = req.body.auth;
    // console.log(username);
    if(!username || !password) return //create custom error
    // const dublicate = usersDb.users.find((person)=> person.username === username); 
    const dublicate = await UserDb.findOne({username});
    console.log(dublicate);
    if(dublicate) return res.status(409).json({msg: 'conflict'});

    
        const encryptedPwd = await bcrypt.hash(password, 10);
    
        // usersDb.setUsers([...usersDb.users, {username, encryptedPwd}]); 
        // await fsPromises.writeFile(path.join(__dirname, '..', 'model', 'users.json'), JSON.stringify(usersDb.users)); //change to Mongo
        try {
            await UserDb.create({username, encryptedPwd});
        } catch(err) {
            console.error(err);
        };
        res.status(200).json({msg: 'success!'});
    
};

module.exports = createLogin;
