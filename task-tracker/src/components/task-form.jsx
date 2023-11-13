import Input from './input'
import Button from './button'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
function TaskForm() {4
  
  const id = uuidv4()
  const [task, setTask] = useState('')

  const handleTaskForm = (e) => {
    e.preventDefault()
    let tasks = [];
    let localTasks = JSON.parse(localStorage.getItem('tasks'));
    if (localTasks) {
      tasks = localTasks;
    }
    tasks.push({ id, task, status: false })
    localStorage.setItem('tasks', JSON.stringify(tasks))
    setTask('')
  }
  return (
    <form onSubmit={handleTaskForm} className="flex flex-col md:flex-row gap-2">
      <Input label="Task" placeholder="6:30 office meeting" value={task} onChange={(e) => setTask(e.target.value)} />
      <Button text="Add task" className="self-start md:self-auto" type="submit" />
    </form>
  )
}

export default TaskForm
