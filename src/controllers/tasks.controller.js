const Task = require("../models/tasks.model")

const getTasks = async(req, res) => {
    const tasks = await Task.find({
        user: req.user.id
    }).populate("user")
    res.json(tasks)
    
}

const getTask = async(req, res) => {
    const task = await Task.findById(req.params.id).populate("user");
    if(!task) return res.status(400).json({message: "Task no encontrado"});
    res.json(task);
}

const createTasks = async(req, res) => {
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
}

const deleteTasks = async(req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) return res.status(400).json({message: "Task no encontrado"});
     return res.sendStatus(204);
}

const updateTasks = async(req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id,req.body,{
        new: true
    });
    if(!task) return res.status(400).json({message: "Task no encontrado"});
    res.json(task);}


module.exports = {
    getTask,
    getTasks,
    createTasks,
    deleteTasks,
    updateTasks
}