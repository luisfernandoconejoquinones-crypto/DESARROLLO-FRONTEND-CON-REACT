import React from "react";
import { useNavigate } from "react-router-dom";

function Contacto() {
 
  let navigate = useNavigate();

  function irAlDashboard() {
    navigate("/dash");
  }

 
  function cerrarSesion() {
    navigate("/");
  }

  return (
    <div>
      <h1>Contacto</h1>
      <p>Mostrar la información de contacto de la empresa.</p>

     
      <div>
        <p><strong>Dirección:</strong> Calle Principal, Ciudad</p>
        <p><strong>Teléfono:</strong> +57 300 123 4567</p>
        <p><strong>Correo:</strong> contacto@empresa.com</p>
      </div>

      <hr />

   
      <div>
        <button onClick={irAlDashboard}>Volver al Dashboard</button>
        <br /><br />
        <button onClick={cerrarSesion}>Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default Contacto;