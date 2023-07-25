const express = require('express');
const cors = require('cors');
const axios = require('axios');


const app = express();
const port = 5000;

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
app.use(express.static('public'));


app.get('/api/memesData', async (req, res)=> {
    const memesData = await getMemesdata();
    res.status(200).json({success: true, data: memesData});
});









////////////////////////////////////////////////////////////////////////////////////

// const getMemesdata = async () => {
//     try {
//       const url = 'https://api.imgflip.com/get_memes';
//       const response = await axios.get(url);
//       const memes = response.data.data.memes;
  
//       // Convert the image data to base64 and add it to the memes array
//       const memesWithBase64 = await Promise.all(
//         memes.map(async (meme) => {
//           const imageResponse = await axios.get(meme.url, {
//             responseType: 'arraybuffer',
//           });
//           const imageData = Buffer.from(imageResponse.data, 'binary').toString('base64');
//           return { ...meme, base64: `data:image/jpeg;base64,${imageData}` };
//         })
//       );
//       console.log(memesWithBase64)
  
//       return memesWithBase64;
//     } catch (error) {
//       throw new Error('Error fetching memes data');
//     }
//   };
///////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(port, ()=> {
    console.log('server is on port 5000');
});




  