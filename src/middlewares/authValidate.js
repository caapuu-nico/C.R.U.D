const jwt = require("jsonwebtoken");
const {TOKEN_SECRET} = require("../config")
const authValidate = (req, res, next) => {
// console.log(req.headers)
const { token } = req.cookies;
// console.log(token)
if(!token)
return res.status(401).json({ message: "No Token, autorizacion denegada"});

jwt.verify(token, TOKEN_SECRET,(err, user)=> {
    if(err) return res.status(403).json({message: "Token invalido"});
    req.user = user;
    next()
})
}



module.exports = {
    authValidate
}