import { useState, useEffect } from "react";

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

function Exercises() {

    const userInfo = {name: "Fabrício", jobTitle: "Programador"};

    return (
        <div>
            <h1>Exercício 1</h1>
            <ExibirDadosUser Info = {userInfo} />
        </div>
    )
}

export default Exercises;