import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Nav from './components/Nav.jsx'
import Index from './pages/Index.jsx'
import Busquedas from './pages/Busquedas.jsx'
import Foro from './pages/Foro.jsx'
import Login from './auth_page/Login.jsx'
import CrearCuenta from './auth_page/Create_Acount.jsx'

function App() {

  return (
    <>
      <CrearCuenta />
    </>
  )
}

export default App
