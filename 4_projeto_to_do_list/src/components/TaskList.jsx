import Task from "./Task"

function TaskList({ tasks, onDeleteTask, onToggleTaskDone }) {
  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDelete = {() => onDeleteTask(task.id)} onToggleDone = {() => onToggleTaskDone(task.id)}/>
      ))}
    </ul>
  )
}

export default TaskList