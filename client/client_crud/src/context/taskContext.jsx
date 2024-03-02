import { useContext, useState, createContext } from "react";
import { createTasksRequest, deleteTasksRequest, getTaskRequest, getTasksRequest, updateTasksRequest } from "../api/tasks";
const TaskContext = createContext();

export const useTasks = () => {
    const context = useContext(TaskContext);
    if(!context) {
        throw new Error("useTasks must be used within a TaskProvider")
    }
    return context
}

export function TaskProvider({children}){
const [tasks, setTasks] = useState([]);


const createTask = async (task) =>{
    const res = await createTasksRequest (task)
    console.log(res)
}
const getTasks = async () => {
   try {
    const res = await getTasksRequest()  
    setTasks(res.data)    
} catch (error) {
    console.log(error)
}
}
const deleteTask = async (id) => {
try {
  const res =  await deleteTasksRequest(id)
    if(res.status === 204) setTasks(tasks.filter((task)=> task._id !== id))
} catch (error) {
    console.log(error)
}

}
const getTask = async (id) => {
 try {
    const res =  await getTaskRequest (id);
    return res.data
 } catch (error) {
    console.log(error)
 }
}
const updateTask = async (id, task) => {
    try {
        const res = await updateTasksRequest(id, task)
    } catch (error) {
        console.log(error)
    }
}
    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks,
            deleteTask,
            getTask,
            updateTask
        }}
        >
            {children}
        </TaskContext.Provider>
    )
}