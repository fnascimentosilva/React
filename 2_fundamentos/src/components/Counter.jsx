import { useState } from "react";
//Aplicando o useState
function Counter(){
    const [count, setCount] = useState(1);
    return(
        <div>
            <p>Você clicou {count} vezes.</p>
            <button onClick={()=>setCount(count+1)
            }>Clique</button>
        </div>
    )
};

export default Counter;