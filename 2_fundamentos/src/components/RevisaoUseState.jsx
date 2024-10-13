import { useState } from "react";

function RevisaoUseState() {

    
    const handleSUbmit = (event) => {
        event.preventDefault();
        console.log(name, email);

    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <form onSubmit={handleSUbmit}>
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome" />
            <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Digite seu email" />

            <button type="submit">Agora vai</button>
        </form>
    )

}

export default RevisaoUseState;