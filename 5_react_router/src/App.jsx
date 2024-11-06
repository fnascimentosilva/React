import { Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Contact from './assets/components/Contact'
import Login from './assets/components/Login'

function App() {


  return (
    <>

      {/*1 - Setup e configuracao inicial */}
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/login">Login</Link></li>
          {/*2 - Navilink */}

          <li>
            {/* Pode ser utilizado link ou navlink */}
            <NavLink className={({ isActive }) => (isActive ? "active-link" : "")} to="/contact">Contato</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/*3 - Usenavigate  */}

        <Route path='/login' element={<Login />}></Route>
      </Routes>

      <p>Rodapé</p>
    </>
  )
}

export default App
