import React from 'react'
import "../App.css"


function ToDoCreate() {
  return (

    <div className='todo-create'>
      <div>
        <h1>TODO APP</h1>
      </div>
      <input className='create-input' type="text" placeholder='Write a Todo'/>
      <button className='create-button'>Create Todo</button>

    </div>
  )
}

export default ToDoCreate