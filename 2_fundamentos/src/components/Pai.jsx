import FilhoFuncao from "./FilhoFuncao";

function Pai() {

    function cliqueFilho(){
        console.log('Clicou no filho');
        
    }
    
    return (
        <FilhoFuncao clicou = {cliqueFilho}></FilhoFuncao>
    )
}

export default Pai;