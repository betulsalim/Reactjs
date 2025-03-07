import React from 'react'
import "../App.css"


function ToDoCreate({onCreateTodo}) {

  const [newTodo, setNewTodo] = React.useState('')

  const clearInput = () => {
    setNewTodo('')
  }

  const createTodo = () => {
    if(!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 1000),
      content: newTodo
    }
    onCreateTodo(request)
    clearInput();
  }
  return (

    <div className='todo-create'>
      <div>
        <h1>TODO APP</h1>
      </div>
      <input value={newTodo} onChange={(event) => setNewTodo(event.target.value)} className='create-input' type="text" placeholder='Write a Todo'/>
      <button onClick={createTodo} className='create-button'>Create Todo</button>

    </div>
  )
}

export default ToDoCreate