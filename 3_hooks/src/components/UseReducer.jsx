import { useReducer } from "react"
//Definicao de estado inicial
const estadoInicial = { contador: 0 }

//Funcao reducer que define como as acoes atualizam o estado
function reducer(estado, acao) {

    switch (acao.tipo) {
        case "incrementar":
            return { contador: estado.contador + 1 };
        case 'decrementar':
            return { contador: estado.contador - 1 };
        case 'resetar':
            return { contador: 0 }
        default:
            throw new Error("Acao nao suportada");
        
    }
    
}

function Contador(){

    const [estado, dispatch] = useReducer(reducer, estadoInicial);

    return(
        <div>
            <p>Contagem:{estado.contador}</p>
            <button onClick={()=> dispatch({tipo: "incrementar"})}>Incrementar</button>
        </div>
    )
}

export default Contador;