const express = require('express');
const cors = require('cors');
const axios = require('axios');


const app = express();
const port = process.env.PORT;


const getMemesdata = async ()=> {
    try {
        const url = 'https://api.imgflip.com/get_memes';
        const response = await axios.get(url);
        return response.data.data.memes;

    }
    catch(error) {
        res.status(500).json({success: false, error: 'Error fetching memes data'});
    };
};



app.use(cors());
// app.use(express.static('public'));


app.get('/api/memesData', async (req, res)=> {
    const memesData = await getMemesdata();
    res.status(200).json({success: true, data: memesData});
});



app.listen(port, ()=> {
    console.log(`server is listening on port ${port}`);
});






  