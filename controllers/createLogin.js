const fsPromises = require('fs').promises;
const bcrypt = require('bcrypt')
const path = require('path');

const usersDb = {
    users: require('../model/users.json'),
    setUsers: function(data) {this.users = data}
};





const createLogin = async (req, res)=> {
    const {username, password} = req.body.auth;
    if(!username || !password) return //create custom error
    const dublicate = usersDb.users.find((person)=> person.username === username);
    if(dublicate) return res.status(409).json({msg: 'conflict'});

    
        const encryptedPwd = await bcrypt.hash(password, 10);
    
        usersDb.setUsers([...usersDb.users, {username, encryptedPwd}]);
        await fsPromises.writeFile(path.join(__dirname, '..', 'model', 'users.json'), JSON.stringify(usersDb.users));
        res.status(200).json({msg: 'success!'});
    
};

module.exports = createLogin;