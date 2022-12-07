import "../styles/ListadoOrdenes.css";
const CrearOrden = () => {
    alert("Modal diseñado para actualizar ordenes ")
    }
export default function ListadoOrdenes (){
    return(
        <div className="listadoOrdenes">
            <h1>LISTADO ÓRDENES</h1>  
            <div>
                <div className="row">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10 row encabezado">
                        <div className="col-md-1 col-sm-1"></div>
                        <h2 className="col-md-2 col-sm-2">#Servicio</h2>
                        <h2 className="col-md-2 col-sm-2">Fecha</h2>
                        <h2 className="col-md-2 col-sm-2">Ciudad Entrega</h2>
                        <h2 className="col-md-2 col-sm-2">Direccón Entrega</h2>
                        <h2 className="col-md-2 col-sm-2">Estado</h2>
                        <div className="col-md-1 col-sm-1"></div>
                        <hr />
                    

                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <div className="row listado">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10 row">
                        <div className="col-md-1 col-sm-1"></div>
                        <h2 className="col-md-2 col-sm-2">1</h2>
                        <h2 className="col-md-2 col-sm-2">15/11/2022</h2>
                        <h2 className="col-md-2 col-sm-2">Bogota</h2>
                        <h2 className="col-md-2 col-sm-2">Calle 1 # 2 -3</h2>
                        <h2 className="col-md-2 col-sm-2">Cumplido</h2>
                        <div className="col-md-1 col-sm-1"></div>
                        <hr />
                    

                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <div className="row listado">
                    <div className="col-md-1 col-sm-1"></div>
                    <div className="col-md-10 col-sm-10 row">
                        <div className="col-md-1 col-sm-1"></div>
                        <h2 className="col-md-2 col-sm-2">2</h2>
                        <h2 className="col-md-2 col-sm-2">18/11/2022</h2>
                        <h2 className="col-md-2 col-sm-2">Cali</h2>
                        <h2 className="col-md-2 col-sm-2">Calle 12#22-3</h2>
                        <h2 className="col-md-2 col-sm-2">Guardado</h2>
                        <div className="col-md-1 col-sm-1"></div>
                    <hr /><hr /><hr />

                    </div>
                    <div className="col-md-1 col-sm-1"></div>
                </div>
                <button onClick={CrearOrden}>¿Quieres actualizar alguna orden?</button>

              
            </div>
        </div>
        
    );

};