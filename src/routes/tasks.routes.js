const {Router} = require("express");
const {authValidate} = require("../middlewares/authValidate");
const { getTasks, createTasks, getTask, deleteTasks, updateTasks } = require("../controllers/tasks.controller");
const {validateSchema} = require("../middlewares/validator.middleware");
const {taskSchema} = require("../schemas/task.schema")
const router = Router();

router.get("/tasks", authValidate, getTasks);

router.post("/tasks",
    authValidate, 
    validateSchema(taskSchema),
    createTasks
 );

router.get("/tasks/:id",authValidate, getTask);

router.delete("/tasks/:id", authValidate, deleteTasks);

router.put("/tasks/:id", authValidate, updateTasks)

module.exports = router;

