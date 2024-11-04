import { useState, useEffect } from "react"

import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"


function App() {
  
  const [tasks, setTasks] = useState([]);

  //adiciona uma nova tarefa
  const addTask = (task) => {

    //id, text, done
    setTasks([...tasks, {id:Date.now(), text: task, done: false}]);
  }

  //deleta ao clicar no botao de remover
  function deleteTask(taskId) {
    setTasks (tasks.filter((task) => task.id !== taskId));
  }

  //inserir o riscado na tarefa feita
  function toggleTaskDone (taskId){
    setTasks(tasks.map((task) => task.id === taskId ? {...task, done: !task.done} : task))
  }

  return (
    <>
      <h1>Lista de tarefas</h1>
      <TaskInput onAddTask = {addTask}/>
      <TaskList tasks = {tasks} onDeleteTask = {deleteTask} onToggleTaskDone = {toggleTaskDone}/>
      
    </>
  )
}

export default App
