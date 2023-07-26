const express = require('express');
const cors = require('cors');
require('dotenv').config();

const memesDataRouter = require('./routes/memesData')

const app = express();
const port = process.env.PORT || process.env.ALT_PORT;



app.use(cors());
app.use(express.static('public'));
app.use('/api/memesData', memesDataRouter);


app.listen(port, ()=> {
    console.log(`server is listening on port ${port}`);
});






  