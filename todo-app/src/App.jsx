import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoCreate from './components/ToDoCreate'
import ToDoList from './components/ToDoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <div className='todo-create-div'>
      <ToDoCreate />  <ToDoList />

      </div>
    </div>
  )
}

export default App
