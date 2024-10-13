import { useState } from "react";

function Greetings({ name }) {
    /*Enunciado Exercício 1:
    Crie um componente funcional chamdo Greeting que aceita uma prop name e renderiza uma mensagem de boas-vindas.
    Por exemplo, se a prop for "Fabrício", o componente deve renderizar "Olá, Fabrício!".
    */
    return (
        <div>
            {/* Se o name tiver vazio não imprime nada na tela, se o name tiver valor irá imprimir a mensagem Olá, name */}
            {/* {name && <p> Olá, {name}! </p>} */}
            {/* Operacao ternária */}
            {name ? <p> Olá, {name}! </p> : <p> Insira um nome válido pra prosseguir! </p>}
        </div>
    )
}

function Counter() {
    /* Enunciado Exercíico 2:
    Crie um componente chamado Counter que renderiza um botão e um texto indicando o número de vezes que o botão foi clcado.
    Por exemplo, se o botão foi clicado 3 vezes, o texto deve mostrar "Você clicou 3 vezes no botão". Inicialize o contador com 0 e incremente a cada clique novo. */
    const [count, setCount] = useState(0);

    return (
        <div>
            {count > 1 ? <p>Você clicou {count} vezes no botão</p> : <p>Você clicou {count} vez no botão</p>}

            <button onClick={() => setCount(count + 1)}>Clique</button>
        </div>
    )
}

const TaskList = ({ tasks }) => {
    /* Enunciado Exercício 3:
    Crie um componente chamado TaskList que aceita uma props tasks, que é um array de objetos com id e text.
    Renderize uma lista ordenada de tarefas, mostrando o texto de cada tarefa. Se não houver tarefas, exiba a nebsagen "Não há tarefas a mostrar!"*/
    if (tasks.length === 0) {
        return <p>Não há tarefas a mostrar!</p>;
    }

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>{task.text}</li>
            ))}
        </ul>
    )



}

function Exercises() {
    //Dados de entrada TaskLists
    const tasks = [
        { id: 1, text: "levantar cedo" },
        { id: 2, text: "tomar banho" },
    ];

    return (
        <div>
            <h2>Exercício 1</h2>
            <Greetings name="Douglas" />

            <h2>Exercício 2</h2>
            <Counter />

            <h2>Exercício 3</h2>
            <TaskList tasks={tasks} />
        </div>
    );
};

export default Exercises;