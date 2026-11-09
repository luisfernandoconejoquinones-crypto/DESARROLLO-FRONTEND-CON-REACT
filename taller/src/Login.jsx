import { useNavigate } from "react-router-dom"


export default function Login(){
      let navigate=useNavigate()
    function llevarDash(){
        navigate("/dash")
    }
    
    function llavarRegistro(){
        navigate("/regis")
    }

    return(
        <div>
            <input type="text" placeholder="Ingrese correo"></input>
               <input type="password" placeholder="Ingrese contraseña"></input>
               <button onClick={llevarDash}>*Aceptar</button>

              <br/> <button onClick={llavarRegistro}>*Registrate</button>
              

        </div>
    )
}