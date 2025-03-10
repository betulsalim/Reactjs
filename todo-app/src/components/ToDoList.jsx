import React from 'react';
import ToDo from './ToDo';

function ToDoList({ todos , onDeleteTodo, onUpdateTodo }) {
  return (
    <div style={{ width: '100%', marginTop: '50px' }}>
      {todos &&
        todos.map((todo) => (
          <ToDo key={todo.id} todo={todo} onDeleteTodo= {onDeleteTodo} onUpdateTodo= {onUpdateTodo}/>
        ))}
    </div>
  );
}

export default ToDoList;
