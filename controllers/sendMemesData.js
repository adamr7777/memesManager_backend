
const getMemesData = require('../utils/getMemesData');


const sendMemesData = async (req, res)=> {
    const user = req.user;
    const memesData = await getMemesData();
    res.status(200).json({success: true, user, data: memesData});
};

module.exports = sendMemesData;