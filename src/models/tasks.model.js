const mongoose = require("mongoose");
// const uniqueValidator = require('mongoose-unique-validator');
const taskSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
        maxlength: 200,
        validate: {
            validator:  function(value){
                return value.length <= 200;
            },
            message: "La descripcion no puede contener mas de 200 caracteres"
        }
    },
    date: {
        type: Date,
        default: Date.now
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }   
},
{
    timestamps: true
}
)
// taskSchema.plugin(uniqueValidator);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task
    
