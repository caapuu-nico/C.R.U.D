import {useForm } from "react-hook-form";
import { useTasks } from "../context/taskContext";
import {useNavigate, useParams} from "react-router-dom";
import { useEffect,  } from "react";


function TaskFormPage() {
const {register, handleSubmit, setValue} = useForm();
const { createTask, getTask, updateTask } = useTasks();
const navigate = useNavigate()
const params = useParams();


useEffect(()=> {
async function loadTask () {
  if(params.id){
    const task =  await getTask(params.id);
    console.log(task)
    setValue("title", task.title)
    setValue("description", task.description)
  }

}
loadTask()
},[])

const onSubmit = handleSubmit((data)=> {
if(params.id){
  updateTask(params.id, data)
  navigate("/tasks")
}else{
  createTask(data)
navigate("/tasks")
}
})


  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
     
       <form onSubmit={onSubmit}>
        <input type="text" 
        placeholder="Title"
        {...register("title")}
        autoFocus //apenas cargue la pagina el curso esto posicionado en este input
        className="bg-zinc-700 text-white w-full p-4 py-2 rounded-md my-2"
        />
        <textarea  
        placeholder="Description"
         rows="3"
        {...register("description")}
        className="bg-zinc-700 text-white w-full p-4 py-2 rounded-md my-2"
        />
        <button>     
          Save
          </button>
      </form> 
    </div>
  )
}

export default TaskFormPage