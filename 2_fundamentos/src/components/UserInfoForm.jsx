import { useState } from "react";
//Aplicando o useState em multivalores;
function UserInfoForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        //Acessar a API via Fetch ou Axios

        console.log(name, email);

    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="DIgite seu nome" />
            <input type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="DIgite seu email" />

            <button type="submit">Enviar</button>
        </form>




    )
}

export default UserInfoForm;