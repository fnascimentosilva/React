import { Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Contact from './assets/components/Contact'

function App() {


  return (
    <>
      
      {/* Setup e configuracao inicial */ }
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <p>Rodapé</p>
    </>
  )
}

export default App
