const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true // no deja espacios
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate:{
          validator: function (v) {
            // Validación básica de formato de email usando una expresión regular
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
          },
          message: props => `${props.value} no es un email válido.`,
        },
      },
      password:{
          type: String,
          required: true
      }
    },
)
const User = mongoose.model('User', userSchema);

module.exports =  User  ;
