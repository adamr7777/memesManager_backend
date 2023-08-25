



const logout = (req, res)=> {
    try{
        const token = req.cookies.jwt;
        if(!token) return res.sendStatus(204);
        res.clearCookie('jwt', { httpOnly: true, sameSite: 'None'});
        return res.sendStatus(204);
    } catch(err) {
        return res.status(400).json({msg: err});
    }
};


module.exports = logout;