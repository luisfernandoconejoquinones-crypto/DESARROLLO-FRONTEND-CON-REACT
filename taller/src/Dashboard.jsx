import { Link } from "react-router-dom"

export default function Dashboard(){
    return(
        <div>
            <h1>bienvenido al inventario</h1>
            <nav>
                <ul>
                    <li><Link to="/">Login</Link></li>
                    <li><Link to="/Pro">Productos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                </ul>
            </nav>
        </div>
    )
}