import {useEffect, useMemo, useState } from "react";

/* Exercicio 1: Uso de useEffect para sincronização de dados
Enunciado: Você precisa exibir informações de um usuário que são recebidas via props de um componente.
Crie um componente que use o hook useEffect para sincronizar as informações do usuário com o título do documento (o título da aba do navegador). */
function ExibirDadosUser({Info}){

    

    useEffect(() => {
        document.title = `${Info.name} - ${Info.jobTitle}`
    }, [Info])

    return(

        <div>
           {/*  { name ? <p>Olá {Info.name}, seja bem vindo!</p> : <p>Insira um nome pra continuar</p> } */}

           <h1>Nome: {Info.name}</h1>
           <p>Profissão: {Info.jobTitle}</p>
        </div>
    )
}


/* Exercício 2: Memorizando cálculos com UseMemo
Enunciado: Suponha que você tem um componente que realiza um cálculo pesado, como uma funcao de fibonacci que é chamada com um número específico.
Use o hook UseMemo para evitar que o calculo seja refeito desnecessariamente. */

function fibonacci(n){
    if(n <= 1){
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

function FibCalculator ({num}) {
    const fibResult = useMemo(() => fibonacci(num), [num]);

    return(
        <div>
            <p>
                Fibonacci de {num} é {fibResult}
            </p>
        </div>
    )
    
}

function useOnlineStatus(){
    const [isOnLine, setIsOnLine] = useState(navigator.onLine);

    useEffect(() => {

        const handleOnLine = () => setIsOnLine(true);
        const handleOffLine = () => setIsOnLine(false);

        window.addEventListener('online', handleOnLine);
        window.addEventListener('offline', handleOffLine);

        //limpeza do evento

        return () => {
            window.removeEventListener('online', handleOnLine);
            window.removeEventListener('offline', handleOffLine);
        }
    }, []);

    return isOnLine;
}

function OnLineStatusIndicator(){
    const isOnLine = useOnlineStatus();

    return (
        <div>
            <p>Voce está {isOnLine ? 'online': 'offline'}</p>
        </div>
    )
}

function Exercises() {

    const userInfo = {name: "Fabrício", jobTitle: "Programador"};
    const num = 10;

    return (
        <div>
            <h2>Exercício 1</h2>
            <ExibirDadosUser Info = {userInfo} />
            <h2>Exercício 2</h2>
            <FibCalculator num = {num}/>
            <h2>Exercício 3</h2>
            <OnLineStatusIndicator/>
        </div>
    )
}

export default Exercises;