import { createContext, useState, useContext, useEffect } from "react";
import { loginRequest, registerRequest, verify } from "../api/auth";
import Cookies from "js-cookie";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context)
        throw new Error("useAuth must be user wihin an AuthProvider")
        return context;
}


export const AuthProvider = ({children})=> {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);
 const signUp = async (user) =>{
       try {
        const res =  await registerRequest(user)
        console.log(res)
        setUser(res.data)
        setIsAuthenticated(true)
       } catch (error) {
        console.log(error.response)
        setErrors(error.response.data)
       }
    } 
const signIn = async (user) => {
    try {
        const res =  await loginRequest(user)
        console.log(res)
        setUser(res.data)
        setIsAuthenticated(true)
    } catch (error) {
        console.error(error)
        setErrors(error.response.data)
    }
}

useEffect(()=> {
    if (errors.length > 0){
        const timer = setTimeout(()=> {
            setErrors([])
        },5000)
        return () => clearTimeout(timer)
    }
},[errors])

useEffect(()=> {
   const checkLogin = async() => {
    const cookies = Cookies.get()
    if(!cookies.token){
        setIsAuthenticated(false)
        setLoading(false)
        return;
    }
       try {
            const res = await verify(cookies.token)
            if(!res.data) 
                return setIsAuthenticated(false);
                setIsAuthenticated(true)              
                setLoading(false);
                setUser(res.data)
       } catch (error) {
        setIsAuthenticated(false)
        setLoading(false)
       }
   }
   checkLogin()
},[])

    return (
        <AuthContext.Provider value={{
            user,
            signUp,
            signIn,
            isAuthenticated,
            user,
            errors,
            loading
        }}>
            {children}
            </AuthContext.Provider>
    )
}