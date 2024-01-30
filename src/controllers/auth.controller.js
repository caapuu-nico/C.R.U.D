const User = require("../models/user.model")
const bcrypt = require("bcryptjs");
const {createAccesToken} = require("../libs/jwt")

const register = async (req, res) => {
  try {
   const {username,email,password} = req.body
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
    res.status(400).json({error:error.message})
  }
}

const login = async (req, res) => {
  const {email, password} = req.body
  try {
 
       const userFound = await User.findOne({ email });
       if(!userFound) return res.status(400).json({message: "User not found!"});

      const matchPassword = await bcrypt.compare(password, userFound.password);
      if(!matchPassword)
      return res.status(400).json({message: "Incorrect password"})

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
  if(!userFound) return res.send(401).json({message: "Usuario no encontrado"});
  return res.json({
    id:userFound._id,
    username:userFound.username,
    email:userFound.email,
  })
  
}

module.exports = {
    register,
    login,
    logout,
    profile
}