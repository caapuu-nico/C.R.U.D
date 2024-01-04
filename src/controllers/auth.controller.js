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

const login = (req, res) => {
    res.send("estoy ingresando con un user")
}

module.exports = {
    register,
    login
}