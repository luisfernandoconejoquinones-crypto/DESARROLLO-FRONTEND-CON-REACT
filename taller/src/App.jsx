import { BrowserRouter } from "react-router-dom"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

// componentes
import Login from "./Login";
import Registro from "./Registro";
import Dashboard from "./Dashboard";
import Productos from "./Productos";
import Contacto from "./Contacto"


function App() {


  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login></Login>} ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/regis" element={<Registro></Registro>}></Route>
        <Route path="/dash" element={<Dashboard></Dashboard>}></Route>
        <Route path="/pro" element={<Productos></Productos>}></Route>
         <Route path="/contacto" element={<Contacto></Contacto>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
   
  )
}

export default App
