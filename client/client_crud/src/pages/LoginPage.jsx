import {useForm} from "react-hook-form";
import { useAuth } from "../context/authContext";
import { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom"
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Card } from "../components/Card";
function LoginPage() {
  const {
      register,
      handleSubmit,
      formState: {
    errors
  }} = useForm();
  const {signIn, isAuthenticated, errors: loginErrors} = useAuth()
  const navigate = useNavigate();
  useEffect(()=> {
    if(isAuthenticated){
    navigate("/tasks")
  }
  },[isAuthenticated])

  const onSubmit = handleSubmit( async(data)=> {
    signIn(data)
  })

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
     <Card>
      {
        loginErrors.map((error, i) =>( 
        <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
          {error}
        </div>
        ))
      }
      <h1 className="text-2xl font-bold">Login</h1>
     <form onSubmit={onSubmit}>
      <Label htmlFor="email">Email:</Label>
            <Input 
            label="Write your email"
            type="email" 
            name="email"
            placeholder="youremail@domain.tld"
            {...register("email",{required: true})} 
        
  
            />
              {
              errors.email && (
                <p className="text-red-500">Email is required</p>
              )
            }
            <Label htmlFor="password">Password:</Label>
            <Input 
            type="password"
            label="Write your password"
            name="password"
            placeholder="Password"
             {...register("password",{required: true})}
        
             />
               {
              errors.password && (
                <p className="text-red-500">Password is required</p>
              )
            }
    <Button type="submit">Login</Button>
    </form>
    <p className="flex gap-x-2 justify-between">
      Don't have an account ? <Link to="/register" className="text-sky-500">Sign Up</Link>
    </p>
    </Card>
     </div>
   
  )
}

export default LoginPage