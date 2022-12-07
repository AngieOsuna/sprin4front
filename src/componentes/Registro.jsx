import "./styles/Registro.css";
export default function Login(){
    //const iniciarSesion = () => {
        //alert("No es posible regsitrarse ahora =(  ")
        //}
    return(
        <div className="registro">
            <div className="encabezado">
            <h1>Registro</h1>
            <a href=""><h2>¿Ya estas registrado?</h2></a>
            </div>
            <form className="formularioregistro">
                <p>
                <label htmlFor="">Nombre</label>
                <input type="text" />
                </p>
                <p>
                <label htmlFor="">Usuario</label>
                <input type="text" />
                </p>
                <p>
                <label htmlFor="">Email</label>
                <input type="text" />
                </p>
                <p>
                <label htmlFor="">Contraseña</label>
                <input type="password" />
                </p>
                <button onClick={Login}>Registrarse</button>
            </form>
        </div>


    )

}