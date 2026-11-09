import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Productos() {
  let navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState("");
  const [precio, setPrecio] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [listaProductos, setListaProductos] = useState([]);

  // consultamos los datos mediante get 
  async function consultarProductos() {
    let respuesta = await fetch("http://localhost:5000/productos");
    if (respuesta.ok) {
      let datos = await respuesta.json();
      setListaProductos(datos);
    } else {
      alert("Error al consultar los productos.");
    }
  }

  // envio de datos al servidor 
  async function manejarEnvio() {
    let nuevoProducto = {
      nombre: nombre,
      categoria: categoria,
      precio: Number(precio),
      cantidad: Number(cantidad)
    };

    let respuesta = await fetch("http://localhost:5000/productos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(nuevoProducto)
    });

    if (respuesta.ok) {
      alert("¡Producto registrado con éxito!");
      setNombre("");
      setCategoria("");
      setPrecio("");
      setCantidad("");
      consultarProductos(); 
    } else {
      alert("Hubo un error al registrar el producto.");
    }
  }

  function irAlDashboard() {
    navigate("/dash");
  }

  function cerrarSesion() {
    navigate("/");
  }

  return (
    <div>
      <h1>Gestión de Productos</h1>

      <div>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="text" placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
        <input type="number" placeholder="Precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
        <input type="number" placeholder="Cantidad" value={cantidad} onChange={(e) => setCantidad(e.target.value)} />
        <button onClick={manejarEnvio}>Guardar Producto</button>
      </div>

      <hr />

      <h2>Lista de Productos</h2>
      <button onClick={consultarProductos}>Consultar Productos</button>
      <br /><br />

       <strong>Tabla de productos</strong>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>

        <tbody>
          {listaProductos.map(function(prod) {
            return (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.nombre}</td>
                <td>{prod.categoria}</td>
                <td>{prod.precio}</td>
                <td>{prod.cantidad}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <hr />

      <div>
        <button onClick={irAlDashboard}>Volver al Dashboard</button>
        <br />
        <button onClick={cerrarSesion}>Cerrar Sesión</button>
      </div>
    </div>
  );
}

export default Productos;