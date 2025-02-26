import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { BiEdit } from "react-icons/bi";
import "../App.css";

function ToDo() {
  return (
    <div className='todo-div'>

      <div>
        ben ilk todoyum
      </div>
      <div className='todo-icons'>
        <IoIosRemoveCircle className='circle'/>
        <BiEdit className='edit'/>
      </div>
    </div>
  )
}

export default ToDo