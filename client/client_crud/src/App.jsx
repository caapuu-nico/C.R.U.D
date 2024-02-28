import { BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "../src/pages/LoginPage";
import RegisterPage from "../src/pages/RegisterPage";
import { AuthProvider } from "./context/authContext";
import TaskPage from "./pages/TaskPage";
import HomePage from "./pages/HomePage";
import TaskFormPage from "./pages/TaskFormPage";
import ProtectedRoute from "./ProtectedRoute";
import Profile from "./pages/Profile";

function App() {
  return (
<AuthProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>

   <Route element={<ProtectedRoute/>}>
   <Route path="/tasks" element={<TaskPage/>}/>
    <Route path="/add-task" element={<TaskFormPage/>}/>
    <Route path="/tasks/:id" element={<TaskFormPage/>}/>
    <Route path="/profile" element={<Profile/>}/>
   </Route>
   
    </Routes>
  </BrowserRouter>
</AuthProvider>
  )
}

export default App
