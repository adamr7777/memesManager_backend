
const getMemesData = require('../utils/getMemesData');


const sendMemesData = async (req, res)=> {
    const memesData = await getMemesData();
    res.status(200).json({success: true, data: memesData});
};

module.exports = sendMemesData;