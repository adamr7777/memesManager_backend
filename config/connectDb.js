const mongoose = require('mongoose');

const connectDb = async ()=>{
    const MONGO_DB_URI = process.env.MONGO_DB_URI;
    const settings = {
        useUnifiedTopology: true,
        useNewUrlParser: true
    };
    try {
        await mongoose.connect(MONGO_DB_URI, settings);
    } catch(err) {
        console.error(err);
    };
};

module.exports = connectDb;