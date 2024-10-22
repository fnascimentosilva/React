import { useEffect, useState } from "react";

function ExemploUseEffect (){

    const [contador, setContador] = useState(0);


    //Executa algo baseado em algo: mudança de valor, carregamento de uma página
    useEffect(() => {
        document.title = `Você clicou ${contador} vezes!`;
    })

    return(
        <div>
            <p>Você clicou {contador} vezes</p>
            <button onClick={() => setContador(contador+1)}>Clique aqui</button>
        </div>
    )
}

export default ExemploUseEffect;