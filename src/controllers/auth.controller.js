const User = require("../models/user.model")

const register =  (req, res) => {
  
  try {
    const {email,password} = req.body
      const newUser = new User({
          username,
          email,
          password
      })
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({error:error.message})
  }
    // console.log(newUser)
    res.send("usuario registrado")
}

const login = (req, res) => {
    res.send("estoy ingresando con un user")
}

module.exports = {
    register,
    login
}