const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = require('./config/connectDb');
const mainRouter = require('./routes/main');
const authRouter = require('./routes/auth');
const authorize = require('./middleware/authorize');
const logoutRouter = require('./routes/logout');


const app = express();
const port = process.env.PORT || process.env.ALT_PORT;

connectDb();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use(cookieParser());
app.use(express.static('public'));
app.use('/authorise', authRouter);
app.use('/api/memesData', authorize);
app.use('/logout', logoutRouter);
app.use('/api/memesData', mainRouter);



mongoose.connection.once('open', ()=>{
    console.log('mongoDb is connected');
    app.listen(port, ()=> {
        console.log(`server is listening on port ${port}`);
    });
});







  