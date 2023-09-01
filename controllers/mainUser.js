
const User = require('../model/UsersData');

const getUserData = async (req, res)=> {
    const {username} = req.params;

    try {
        const data = await User.findOne({username});
        res.status(200).json({data});
    } catch(err) {
        console.error(err);
    };
};



const updateUserData = async (req, res)=> {
    const {userData} = req.body
    const {username} = userData;
    const query = {username};

    try {
        await User.findOneAndUpdate(query, {$set: userData}, {new: true});
        res.sendStatus(200);
    } catch(err) {
        console.error(err);
    };
};

module.exports = {getUserData, updateUserData};