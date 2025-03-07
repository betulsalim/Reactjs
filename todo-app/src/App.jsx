import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoCreate from './components/ToDoCreate'
import ToDoList from './components/ToDoList'

function App() {
  const [todos, setTodos] = useState([]);

  const createToDo = (todo) => {
    setTodos([...todos, todo]);
  }

  const deleteToDo = (id) => {
    setTodos([...(todos.filter(todo => todo.id !== id))]);
  }

  const updateToDo = (request) => {
    const {id, content} = request;
    const newTodos = todos.map(todo => {
      if(todo.id === id) {
        return {
          ...todo,
          content
        }
      }
      return todo;
    })
    setTodos(newTodos);
  }

  return (
    <div className='app'>
      <div className='main'>
      <ToDoCreate onCreateTodo = {createToDo} />
      <ToDoList todos = {todos} onDeleteTodo={deleteToDo} onUpdateTodo={updateToDo}/>

      </div>
    </div>
  )
}

export default App
