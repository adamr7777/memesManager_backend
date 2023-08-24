const jwt = require('jsonwebtoken');

const authorize = (req, res, next)=> {
    // const token = req.cookies.jwt;
    const token = req.headers.authorization;
    
    if(!token) return res.sendStatus('401'); //create a custom error
    try{
        const decoded = jwt.verify(token, process.env.SECRET)
        const {username} = decoded;
        req.user = {username}
    }
    catch(error) {
        console.error(error);
    };
    next();
};


module.exports = authorize;