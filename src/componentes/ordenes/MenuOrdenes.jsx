import "../styles/MenuOrdenes.css";
import { Link } from "react-router-dom";
export default function MenuOrdenes(){

    return(
        <div className="menu">
            <nav className="  navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse row" id="navbarNav">
                        <div className="col-md-4 col-sm-4">
                            <img src="" alt="" />
                            <Link className="navbar-brand" href="#"><h1>Usuario XYZ</h1></Link>
                        </div>
                        <div className=" col-md-8 col-sm-8">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/registroOrdenes"><h1>Registro Ordenes</h1></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/listadoOrdenes"><h1>Listado Ordenes</h1></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login"><h1>Cerrar Sesion</h1></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>    
    );
};