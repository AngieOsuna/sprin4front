import { useRef, useState } from "react";
import "../styles/RegistroOrdenes.css";
import { Link } from "react-router-dom"; 

export default function RegistroOrdenes(){
    const fechaRef = useRef();
    const horaRef = useRef();
    const anchoRef = useRef();
    const largoRef = useRef();
    const altoRef = useRef();
    const pesoRef = useRef();
    const direccionRecogidaRef = useRef();
    const ciudadRecogidaRef = useRef();
    const nombreDestinatarioRef = useRef();
    const cedulaDestinatarioRef = useRef();
    const direccionEntregaRef = useRef();
    const ciudadEntregaRef = useRef();

    const [exito, setExito] = useState(false);

    function CrearOrden() {
        const fecha =fechaRef.current.value;
        const hora =horaRef.current.value;
        const ancho =anchoRef.current.value;
        const largo =largoRef.current.value;
        const alto =altoRef.current.value;
        const peso =pesoRef.current.value;
        const direccionRecogida =direccionRecogidaRef.current.value;
        const ciudadRecogida =ciudadRecogidaRef.current.value;
        const nombreDestinatario =nombreDestinatarioRef.current.value;
        const cedulaDestinatario =cedulaDestinatarioRef.current.value;
        const direccionEntrega =direccionEntregaRef.current.value;
        const ciudadEntrega =ciudadEntregaRef.current.value;

        fetch("http://localhost:8000/registroOrdenes/guardar", {
            headers: {
                "content-type": "aplication/json", 
            }, 
            method: "POST", 
            body: JSON.stringify({fecha, hora, ancho, largo, alto, peso, direccionRecogida, ciudadRecogida, nombreDestinatario, cedulaDestinatario, direccionEntrega, ciudadEntrega })
        })
            .then(data => data.json())
            .then(res => {
                alert(res.msg)
                //if (res.estado == "ok") {
                  //  setExito(true);
                    //limpiar();
            })
            .catch(err => alert(err))
            .finally()
    }

    //const CrearOrden = () => {
        //alert("Aun no disponible para crear ordenes =(  ")      

    return( 

        <div className="registroOrdenes">
            {exito && <div className="alert alert-primary" role="alert" >Orden Guardada</div>}
            <h1>REGISTRO DE ORDENES</h1>
            <div className="datosOrdenes">
                
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <p className="col-md-5 col-sm-5 row">
                        <label className="col-md-6 col-sm-6 row" htmlFor="">Fecha</label>
                        <input ref={fechaRef} name= "fecha" id= "fecha" className="col-md-6 col-sm-6 row" type="date" />
                    </p>
                    <p  className="col-md-5 col-sm-5 row">
                        <label className="col-md-6 col-sm-6 row" htmlFor="">Hora</label>
                        <input ref={horaRef} name= "hora" id= "hora" className="col-md-6 col-sm-6 row"type="time" />
                    </p>
                    <div className="col-md-1 col-sm-1"></div>
                </div>

                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <p className="col-md-5 col-sm-5 row">
                        <label className="col-md-6 col-sm-6 row" htmlFor="">Ancho (cm)</label>
                        <input ref={anchoRef} name= "ancho" id= "ancho" className="col-md-6 col-sm-6 row" type="number" />
                    </p>
                    <p  className="col-md-5 col-sm-5 row">
                        <label className="col-md-6 col-sm-6 row" htmlFor="">Largo (cm)</label>
                        <input ref={largoRef} name= "largo" id= "largo" className="col-md-6 col-sm-6 row"type="number" />
                    </p>
                    <div className="col-md-1 col-sm-1"></div>
                </div>

                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <p className="col-md-5 col-sm-5 row">
                        <label className="col-md-6 col-sm-6 row" htmlFor="">Alto (cm)</label>
                        <input ref={altoRef} name= "alto" id= "alto" className="col-md-6 col-sm-6 row" type="number" />
                    </p>
                    <p  className="col-md-5 col-sm-5 row">
                        <label className="col-md-6 col-sm-6 row" htmlFor="">Peso (kg)</label>
                        <input ref={pesoRef} name= "peso" id= "peso" className="col-md-6 col-sm-6 row"type="number" />
                    </p>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                    
            </div>
            <div>
            <form className="formularioRegistroOrdenes">
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10">
                        <input ref={direccionRecogidaRef} name= "direccionRecogida" id= "direccionRecogida" class="form-control form-control-lg" type="text" placeholder="Dirección de Recogida" aria-label=".form-control-lg example"></input>
                        <br />
                        
                    </div>
                
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10">
                        <input ref={ciudadRecogidaRef} name= "ciudadRecogida" id= "ciudadRecogida" class="form-control form-control-lg" type="text" placeholder="Ciudad de Recogida" aria-label=".form-control-lg example"></input>
                        <br />
                        
                    </div>
                
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10">
                        <input ref={nombreDestinatarioRef} name= "nombreDestinatario" id= "nombreDestinatario" class="form-control form-control-lg" type="text" placeholder="Nombre del Destinatario" aria-label=".form-control-lg example"></input>
                        <br />
                        
                    </div>
                
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10">
                        <input ref={cedulaDestinatarioRef} name= "cedulaDestinatario" id= "cedulaDestinatario" class="form-control form-control-lg" type="text" placeholder="Cédula/Nit del Destinatario" aria-label=".form-control-lg example"></input>
                        <br />
                        
                    </div>
                
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10">
                        <input ref={direccionEntregaRef} name= "direccionEntrega" id= "direccionEntrega" class="form-control form-control-lg" type="text" placeholder="Dirección de Entrega" aria-label=".form-control-lg example"></input>
                        <br />
                        
                    </div>
                
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10">
                        <input ref={ciudadEntregaRef} name= "ciudadEntrega" id= "ciudadEntrega" class="form-control form-control-lg" type="text" placeholder="Ciudad de entrega" aria-label=".form-control-lg example"></input>
                        <hr />
                        
                    </div>
                
                    <div className="col-md-1 col-sm-1"></div>
                </div>

                <button onClick={CrearOrden}>CREAR ORDEN</button>
            </form>
            </div>
        </div>
    );
}
