import {useForm } from "react-hook-form";
import { useTasks } from "../context/taskContext";
import {useNavigate, useParams} from "react-router-dom";
import { useEffect,  } from "react";
import dayjs from "dayjs";
import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { Input } from "../components/Input";
import {Textarea} from "../components/TextTarea";
import { Button } from "../components/Button";

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
    setValue("date",dayjs(task.date).utc().format("YYYY-MM-DD"))
  }

}
loadTask()
},[])

const onSubmit = handleSubmit((data)=> {



const dataValid = {
...data,
date: data.date ? dayjs.utc(data.date).format(): dayjs.utc().format(),
}

if(params.id){
  updateTask(params.id, dataValid)
}else{
  createTask(
    dataValid
  )
}
navigate("/tasks")
})


  return (
    <Card>
     
       <form onSubmit={onSubmit}>
        <Label htmlFor="title">Title:</Label>
        <Input type="text" 
        placeholder="Title"
        name="title"
        {...register("title")}
        autoFocus //apenas cargue la pagina el curso esto posicionado en este input
        />
        <Label htmlFor="description">Description:</Label>
        <Textarea  
        id="description"
        name="description"
        placeholder="Description"
         rows="3"
        {...register("description")}
        />
             <Label htmlFor="date">
              Date
              </Label>
              <Input
              type="date" 
              name="date"
        {...register("date")}
              >
       
        </Input>
        <Button className="bg-indigo-500 px-3 py-2 rounded-md my-2">     
          Save
          </Button>
      </form> 
      </Card>
  )
}

export default TaskFormPage