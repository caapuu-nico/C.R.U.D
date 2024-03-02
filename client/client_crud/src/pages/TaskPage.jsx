import { useEffect } from "react";
import { useTasks } from "../context/taskContext"
import TaskCard from "../components/TaskCard";
function TaskPage() {
const {getTasks, tasks} = useTasks();

useEffect(()=> {
  getTasks()
},[])
  return (
  <div className="grid grid-cols-3 gap-2">
    {
      tasks.map(task => (
       <TaskCard task={task} key={task._id}></TaskCard>
      ))
    }
  </div>
    
  )
}

export default TaskPage
