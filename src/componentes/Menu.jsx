import "./styles/Menu.css";
import { Link } from "react-router-dom";
export default function Menu(){

    return(
        <div className="menu">
            <nav className="  navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="#"><h1>InstaYa</h1></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><h1>Home</h1></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login"><h1>Login</h1></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registro"><h1>Registro</h1></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/menuOrdenes"><h1>Ordenes</h1></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>    
    );
};