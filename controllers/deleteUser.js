
const User = require('../model/UsersData');



const deleteUser = async (req, res)=> {
    const {username} = req.params;
    try {
        const deletedUser = await User.findOneAndDelete({username});
        if(deletedUser) res.json({msg: 'success!'})
    } catch(err) {
        console.error(err);
    };
};

module.exports = deleteUser;

