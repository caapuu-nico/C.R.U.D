import { createContext, useState, useContext } from "react";
import { loginRequest, registerRequest } from "../api/auth";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("useAuth must be user wihin an AuthProvider")
    }
    return context;
}


export const AuthProvider = ({children})=> {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);

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
    } catch (error) {
        console.error(error)
    }
}

    return (
        <AuthContext.Provider value={{
            signUp,
            signIn,
            isAuthenticated,
            user,
            errors
        }}>
            {children}
            </AuthContext.Provider>
    )
}