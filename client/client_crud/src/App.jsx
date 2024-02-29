import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./ProtectedRoute";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import  TaskFormPage  from "./pages/TaskFormPage";
import LoginPage  from "./pages/LoginPage";
import  TaskPage  from "./pages/TaskPage";
import { TaskProvider } from "./context/taskContext";
// import { TaskProvider } from "./context/tasksContext";

function App() {
  return (
<AuthProvider>
    <TaskProvider>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>

    <Route element={<ProtectedRoute/>}>
   <Route path="/tasks" element={<TaskPage/>}/>
    <Route path="/add-task" element={<TaskFormPage/>}/>
    <Route path="/tasks/:id" element={<TaskFormPage/>}/>
   </Route>
    </Routes>
  </BrowserRouter>
    </TaskProvider>
</AuthProvider>
  )
}

export default App
