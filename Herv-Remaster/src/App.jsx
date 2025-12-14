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
import Conocer from './pages/Conocer.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/home' element={<Index/>} />
        <Route path='/create' element={<CrearCuenta/>} />
      </Routes>
    </Router>    
  );
}

export default App
