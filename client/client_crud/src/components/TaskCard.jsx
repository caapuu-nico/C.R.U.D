import { useTasks } from "../context/taskContext"
import { Link } from "react-router-dom"
import {Card} from "./Card";
import utc from "dayjs/plugin/utc";
import dayjs from "dayjs";
dayjs.extend(utc)
function TaskCard({task}) {
    const {deleteTask} = useTasks()
  return (
    <Card>
         <div key={task._id}>
          <h1 className="text-2xl font-bold">{task.title}</h1>
          <div className="flex gap-x-2 items-center ">
            <button
               onClick={()=>{
              deleteTask(task._id)
            }} 
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-1  my-2 rounded-md">Delete</button>
            <Link to={`/tasks/${task._id}`}
            className="bg-indigo-500 px-4  hover:bg-indigo-600 py-1 rounded-md my-2 ">Edit</Link>
          </div>
          <p className="text-slate-300">{task.description}</p>
          <p>
            {dayjs(task.date).utc().format("DD/MM/YYYY")}
          </p>
        </div>
        </Card>
  )
}

export default TaskCard