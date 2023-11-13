import { useEffect } from "react"
import { useState } from "react"
import { Card, TaskForm } from "./components"
import Button from "./components/button"

function ListIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
    </svg>

  )
}

function GridIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  )
}

function App() {
  const [tasks, setTasks] = useState([])
  const [layout, setLayout] = useState('card')

  console.log(tasks)
  useEffect(() => {
    let localTasks = JSON.parse(localStorage.getItem('tasks'));
    if (localTasks) {
      setTasks(localTasks)
    }
  }, [tasks])

  return (
    <div className="flex flex-col gap-10 items-center py-2">
      <div className="flex justify-center items-center gap-3 my-3">
        <img src="/logo.png" alt="logo" className="h-11 md:h-20" />
        <span className="text-xl md:text-3xl font-tektur text-tertiary-600 font-semibold">Task tracker application</span>
      </div>
      <div className="flex gap-2 items-start">
        <TaskForm />
        <Button Icon={layout === 'list'? GridIcon: ListIcon} onClick={() => setLayout(prev => prev === 'list' ? 'card' : 'list')} />
      </div>
      <div className={`w-[80%] flex  gap-5 justify-center ${layout === 'list'? 'flex-col': 'flex-row flex-wrap'}`}>
        {
          tasks && tasks.map(task => (
            <Card id={task.id} task={task.task} key={task.id} type={layout} taskStatus={task.status}/>
          ))
        }
      </div>
    </div>
  )
}

export default App
