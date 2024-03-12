const Task = require("../models/tasks.model")

const getTasks = async(req, res) => {
    const tasks = await Task.find({
        user: req.user.id
    }).populate("user")
    res.json(tasks)
    
}

const getTask = async(req, res) => {
   try {
    const task = await Task.findById(req.params.id).populate("user");
    if(!task) return res.status(400).json({message: "Task no encontrado"});
    res.json(task);
   } catch (error) {
    res.status(400).json({error:error.message})
    }
}

const createTasks = async(req, res) => {
    try {
        const {title, description, date} = req.body;
    console.log(req.user)
    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    });
    const saveTask = await newTask.save();
    res.json(saveTask)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const deleteTasks = async(req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) return res.status(400).json({message: "Task no encontrado"});
     return res.sendStatus(204);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const updateTasks = async(req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id,req.body,{
        new: true
    });
    if(!task) return res.status(400).json({message: "Task no encontrado"});
    res.json(task);
  } catch (error) {
    res.status(400).json({error:error.message})
  }
}


module.exports = {
    getTask,
    getTasks,
    createTasks,
    deleteTasks,
    updateTasks
}