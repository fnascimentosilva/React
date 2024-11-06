import { Routes, Route, Link, NavLink } from 'react-router-dom'
import './App.css'
import Home from './assets/components/Home'
import About from './assets/components/About'
import Contact from './assets/components/Contact'
import Login from './assets/components/Login'
import Dashboard from './assets/components/Dashboard'
import Profile from './assets/components/Profile'
import Settings from './assets/components/Settings'
import TaskDetails from './assets/components/TaskDetails'

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
          
          <li>
            <Link to={'/dashboard'}>Dashboard</Link >
          </li>
        </ul>

        {/*5 - Rotas dinamicas */}
        <div>
          <h2>Lista de tarefas</h2>
          <Link to={'/tasks/1'}>Tarefa 1</Link>
          <Link to={'/tasks/2'}>Tarefa 2</Link>
          <Link to={'/tasks/3'}>Tarefa 3</Link>
        </div>

        {/* 404 página nao encontrada */}
        <div>
          <Link to={'/itens/1'}>Irem 1</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/*3 - Usenavigate  */}

        <Route path='/login' element={<Login />}></Route>

        {/*4 -  Rotas aninhadas */}
        <Route path='/dashboard'element = {<Dashboard/>}>
        <Route path='profile' element = {<Profile/>}/>
        <Route path='settings' element = {<Settings/>}/>
        </Route>

        {/*5 - Rotas dinamicas */}
        <Route path='/tasks/:taskId' element={<TaskDetails/>}/>
      </Routes>

      <p>Rodapé</p>
    </>
  )
}

export default App
