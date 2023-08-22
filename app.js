const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const mainRouter = require('./routes/main');
const authRouter = require('./routes/auth');
const authorize = require('./middleware/authorize');
const logoutRouter = require('./routes/logout');

const app = express();
const port = process.env.PORT || process.env.ALT_PORT;



app.use(cors());
app.use(express.json());
app.use(cookieParser());
// app.use(express.static('public'));
// app.use('/authorise', authRouter);
// app.use('/api/memesData', authorize);
app.use('/logout', logoutRouter);
app.use('/api/memesData', mainRouter);


app.listen(port, ()=> {
    console.log(`server is listening on port ${port}`);
});






  