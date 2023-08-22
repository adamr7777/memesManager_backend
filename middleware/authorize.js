const jwt = require('jsonwebtoken');

const authorize = (req, res, next)=> {
    const token = req.cookies.jwt;
    
    if(!token) return res.sendStatus('401'); //create a custom error
    try{
        const decoded = jwt.verify(token, process.env.SECRET)
        const {username} = decoded.person;
        req.user = {username}
        console.log(req.user);
    }
    catch(error) {
        console.error(error);
    };
    next();
};


module.exports = authorize;