const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const connectDb = require('./config/connectDb');
const mainRouter = require('./routes/main');
const authRouter = require('./routes/auth');
const authorize = require('./middleware/authorize');
const userDataRouter = require('./routes/userData');
const deleteUserRouter = require('./routes/deleteUser');


const app = express();
const port = process.env.PORT || process.env.ALT_PORT;

connectDb();

app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.static('public'));
app.use('/authorise', authRouter);
app.use('/api/memesData', authorize);
app.use('/api/memesData', mainRouter);
app.use('/api/userData', userDataRouter);
app.use('/api/deleteUser/', deleteUserRouter);




mongoose.connection.once('open', ()=>{
    console.log('mongoDb is connected');
    app.listen(port, ()=> {
        console.log(`server is listening on port ${port}`);
    });
});







  