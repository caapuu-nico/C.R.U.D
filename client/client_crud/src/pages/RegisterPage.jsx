import {useForm} from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
function RegisterPage() {
    const {register, handleSubmit, formState: {
      errors
    }} = useForm();
    const {signUp, isAuthenticated, errors: registerError} = useAuth();
    const navigate = useNavigate();

    useEffect(()=> {
      if(isAuthenticated){
      navigate("/tasks")
    }
    },[isAuthenticated])

    const onSubmit =handleSubmit( async(user)=>{
     signUp(user)
    })
  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
    <Card>
      {
        registerError.map((error, i)=>(
          <div className="bg-red-500 p-2 text-white" key={i}>
            {error}
          </div>
        ))
      }
        <form onSubmit={onSubmit}>
          <Label htmlFor="username">Username:</Label>
            <Input
             type="text"
            placeholder="Username"
            name="username"
            {...register("username",{required: true})} 
            autoFocus
           
            />
            {
              errors.username && (
                <p className="text-red-500">Username is required</p>
                )
              }
              <Label htmlFor="email">Email:</Label>
            <Input type="email" 
            placeholder="Email"
            name="email"
            {...register("email",{required: true})} 
            />
              {
                errors.email && (
                  <p className="text-red-500">Email is required</p>
                  )
                }
                <Label htmlFor="Password">Confirm password:</Label>
            <Input 
            type="password"
            placeholder="Password"
            name="Password"
             {...register("password",{required: true})}
             />
               {
                 errors.Password && (
                   <p className="text-red-500">Password is required</p>
                   )
                  }
    <Button type="submit">Register</Button>
    </form>
    <p className="flex gap-x-2 justify-between">
      You have an account ? <Link to="/login" className="text-sky-500">Sign In</Link>
    </p>
    </Card>
    </div>
                 
  )
}

export default RegisterPage