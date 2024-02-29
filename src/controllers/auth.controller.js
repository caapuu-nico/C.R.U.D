const User = require("../models/user.model")
const bcrypt = require("bcryptjs");
const {createAccesToken} = require("../libs/jwt");
const jwt = require("jsonwebtoken");
const {TOKEN_SECRET} = require("../config")

const register = async (req, res) => {
  const {username,email,password} = req.body
  try {

const userFound = await User.findOne({email});
if(userFound)
return res.status(400).json(["The email is already in use"]);

 const hash = await bcrypt.hash(password, 10)
      var newUser = new User({
        username,
         email,
         password: hash
  })
const userCreate = await newUser.save()
const token = await createAccesToken({id: userCreate._id})

  res.cookie("token",token)
  res.json({
    id:userCreate._id,
    username:userCreate.username,
    email:userCreate.email
   })
  } catch (error) {
    res.status(400).json(["The email is already in use"])
  }
}

const login = async (req, res) => {
  const {email, password} = req.body
  try {
 
       const userFound = await User.findOne({ email });
       if(!userFound) return res.status(400).json(["User not found!"]);

      const matchPassword = await bcrypt.compare(password, userFound.password);
      if(!matchPassword)
      return res.status(400).json(["Incorrect password"])

 const token = await createAccesToken({id: userFound._id})
 
   res.cookie("token",token)
   res.json({
     id:userFound._id,
     username:userFound.username,
     email:userFound.email
    })
   } catch (error) {
     res.status(400).json({error:error.message})
   }
}

const logout = async (req, res)=> {
res.cookie("token","",{
  expires: new Date(0)
});
return res.sendStatus(200);
}

const profile = async (req, res)=> {
  const userFound = await User.findById(req.user.id)
  if(!userFound) return res.send(401).json(["Usuario no encontrado"]);
  return res.json({
    id:userFound._id,
    username:userFound.username,
    email:userFound.email,
  })
}

const verify = async (req, res)=> {
  const  { token } = req.cookies
  if (!token) return res.status(401).json({message:"Unauthorized"});

  jwt.verify(token, TOKEN_SECRET, async (err, user)=> {
    if(err) return res.status(401).json({message:"Unauthorized"});

    const userFound = await User.findById(user.id)
    if(!userFound) return res.status(401).json({message:"Unauthorized"});
    return res.json({
      id:userFound._id,
    username:userFound.username,
    email:userFound.email,
    })

  })
  
}
  

module.exports = {
    register,
    login,
    logout,
    profile, 
    verify
}