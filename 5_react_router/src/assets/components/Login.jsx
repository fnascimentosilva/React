import { useState } from "react"
import { useNavigate } from "react-router-dom";

function Login() {

    const [username, setUsername] = useState("");

    const navigate = useNavigate();

    function handleLogin(event){
        event.preventDefault();

        console.log(`O usuário ${username} está logado`);

       
    }
  return (
    <form onSubmit={handleLogin}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <button type="submit">Entrar</button>
    </form>
  )
}

export default Login