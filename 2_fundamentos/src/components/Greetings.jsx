function Greetings({name}){

    return (
        <div>
            {/* Se o name tiver vazio não imprime nada na tela, se o name tiver valor irá imprimir a mensagem Olá, name */}
            {/* {name && <p> Olá, {name}! </p>} */}
            {/* Operacao ternária */}
            {name ? <p> Olá, {name}! </p> : <p> Insira um nome válido pra prosseguir! </p>}
        </div>
    )
}

export default Greetings;