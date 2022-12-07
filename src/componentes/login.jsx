import "./styles/Login.css";
import { useRef } from "react"
import { Link } from "react-router-dom";

export default function Login() {
    const usuarioRef = useRef();
    const passwordRef = useRef();

    function login() {
        const usu = usuarioRef.current.value;
        const pass = passwordRef.current.value;

        fetch("http://localhost:8000/login", {
            headers: {"content-type": "application/json" },
            method: "POST", 
            body: JSON.stringify({ usu, pass})
        }) .then(res => res.json())
        .then(res => {
            if (res.estado === "ok") {
                window.location.href = res.url;    
            }else{
                alert("Error: Usuario/Password incorrectos")
            }
        })
    }

    return(
        <div className="login">
            <div className="encabezado">
            <h1>LOGIN</h1>
            <a href=""><h2>Registrarse</h2></a>
            </div>
            <form className="formulariologin">
                <p>
                <label htmlFor="">Email</label>
                <input ref={usuarioRef} type="text" />
                </p>
                <p>
                <label htmlFor="">Contraseña</label>
                <input ref={passwordRef} type="password" />
                </p>
                <button onClick={login}>Iniciar Sesion</button>
            </form>
        </div>


    )

}