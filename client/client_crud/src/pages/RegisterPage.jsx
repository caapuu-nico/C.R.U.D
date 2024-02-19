import {useForm} from "react-hook-form";
function RegisterPage() {
    const {register} = useForm();
  return (
    <div>
        <form action="">
            <input type="text"
            {...register("username",{required: true})} 
            className="w-full bg-slate-500 text-white px-4 py-2 rounded-md"
            />
            <input type="email" 
            {...register("email",{required: true})} 
            className="w-full bg-slate-500 text-white px-4 py-2 rounded-md"
            />
            <input type="password"
             {...register("password",{required: true})}
             className="w-full bg-slate-500 text-white px-4 py-2 rounded-md"
             />
    <button type="submit">Register</button>
    </form>
    </div>
  )
}

export default RegisterPage