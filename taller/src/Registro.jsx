import { useNavigate } from "react-router-dom";

export default function Registro(){
    let navigate=useNavigate()
    function Irlogin(){
        navigate("/login")
    }
    return(
        <div>
            <h1>Formulario De Registro</h1>

            <input type="text" placeholder=" Escriba Nombre"></input>
            <input type="text" placeholder="Escriba Apellido"></input>
            <input type="text"placeholder="Escriba Correo"></input>
            <input type="password" placeholder="Escriba Contraseña"></input>
            <button onClick={Irlogin}>Aceptar</button>
        </div>
    )

    
}