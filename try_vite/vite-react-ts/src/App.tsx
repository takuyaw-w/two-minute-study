import React, { useState } from 'react'
import { Task } from './components/Types'
import { TaskInput } from "./components/TaskInput";
import { TaskList } from "./components/TaskList";
import './App.css'

const initialState: Task[] = []

function App() {
  const [tasks, setTasks] = useState(initialState)

  return (
    <div>
      <TaskInput setTasks={setTasks} tasks={tasks} />
      <TaskList setTasks={setTasks} tasks={tasks} />
    </div>
  )
}

export default App
