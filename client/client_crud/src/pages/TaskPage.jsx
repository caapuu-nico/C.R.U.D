import { useEffect } from "react";
import { useTasks } from "../context/taskContext"

function TaskPage() {
const {getTasks, tasks} = useTasks();

useEffect(()=> {
  getTasks()
},[])
  return (
  <div>
    {
      tasks.map(task => (
        <div key={task._id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))
    }
  </div>
    
  )
}

export default TaskPage
