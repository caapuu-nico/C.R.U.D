import { useContext, useState, createContext } from "react";
import { createTasksRequest, getTasksRequest } from "../api/tasks";
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
    return (
        <TaskContext.Provider value={{
            tasks,
            createTask,
            getTasks
        }}
        >
            {children}
        </TaskContext.Provider>
    )
}