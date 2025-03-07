import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import { IoCheckmarkDone } from "react-icons/io5";
import "../App.css";

function ToDo({todo, onDeleteTodo, onUpdateTodo}) {
  const {id, content} = todo;

  const [editable, setEditable] = React.useState(false);
  const [newContent, setNewContent] = React.useState(content);

  const updateTodo = () => {
    onUpdateTodo({
      id,
      content: newContent
    });
    setEditable(false);
  }

  const deleteTodo = () => {
    onDeleteTodo(id);
  }
  return (
    <div className='todo-div'>

      <div>
        {
          editable ? <input value={newContent} onChange={(event) => setNewContent(event.target.value) } className='todo-input' type="text"/> : content
        }
      </div>
      <div className='todo-icons'>
        <IoIosRemoveCircle className='circle' onClick={deleteTodo}/>
        {
          editable ? <IoCheckmarkDone className='check' onClick={updateTodo}/> : <BiEdit className='edit' onClick={() => setEditable(true)}/>
        }


      </div>
    </div>
  )
}

export default ToDo