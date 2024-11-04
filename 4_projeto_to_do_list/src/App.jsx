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

  function deleteTask(taskId) {
    setTasks (tasks.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <h1>Lista de tarefas</h1>
      <TaskInput onAddTask = {addTask}/>
      <TaskList tasks = {tasks} onDeleteTask = {deleteTask}/>
      
    </>
  )
}

export default App
