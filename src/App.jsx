import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './componentes/Menu'
import Login from './componentes/Login'
import Registro from './componentes/Registro'
import MenuOrdenes from './componentes/ordenes/MenuOrdenes'
import ActualizarOrden from './componentes/ordenes/ActualizarOrden'
import ListadoOrdenes from './componentes/ordenes/ListadoOrdenes'
import RegistroOrdenes from './componentes/ordenes/RegistroOrdenes'





function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Menu></Menu>
      
      <Routes>
        <Route path='/' element={<h1>Por favor inicia sesion </h1>}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/registro' element={<Registro/>}/>
        <Route path='/menuOrdenes' element={<MenuOrdenes/>}/>
        <Route path='/listadoOrdenes' element={<ListadoOrdenes/>}/>
        <Route path='/registroOrdenes' element={<RegistroOrdenes/>}/>

        <Route path='*' element={<h1>Not Found</h1>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
