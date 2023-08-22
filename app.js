const express = require('express');
const cors = require('cors');
require('dotenv').config();

const mainRouter = require('./routes/main');

const app = express();
const port = process.env.PORT || process.env.ALT_PORT;



app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api/memesData', mainRouter);


app.listen(port, ()=> {
    console.log(`server is listening on port ${port}`);
});






  