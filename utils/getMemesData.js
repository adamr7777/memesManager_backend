const axios = require('axios');


const getMemesData = async ()=> {
    try {
        const url = 'https://api.imgflip.com/get_memes';
        const response = await axios.get(url);
        return response.data.data.memes;

    }
    catch(error) {
        res.status(500).json({success: false, error: 'Error fetching memes data'});
    };
};

module.exports = getMemesData;