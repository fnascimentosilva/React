import { Link, Outlet } from "react-router-dom"


function Dashboard() {
  return (
    <div>
        <h2>Dashboard</h2>
        <ul>
            <li><Link to={'profile'}>Perfil</Link></li>
            <li><Link to={'settings'}>Configuracoes</Link></li>
        </ul>

        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard