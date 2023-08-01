const jwt = require('jsonwebtoken');

const authorize = (req, res, next)=> {
    const authHead = req.headers.authorization;
    console.log(authHead.startsWith('Bearer '));
    if(!authHead || !authHead.startsWith('Bearer ')) return; //create a custom error
    const token = authHead.split(' ')[1];
    try{
        const decoded = jwt.verify(token, process.env.SECRET)
        console.log(decoded);
        console.log('yes');
    }
    catch(error) {
        console.error(error);
    };
    next();
};


module.exports = authorize;