import React from 'react'
import Ytapp from './Ytapp'

export default function Todo({key, todoValue, toggleTodo}) {
  function handleTodoClick (){
    toggleTodo(todoValue.id)
  }
  return (
    <div>
      <label>
      {/* <input type = "checkbox" checked={todoValue.complete}/>  */}
      <input type = "checkbox" checked = {todoValue.complete} onChange ={handleTodoClick} /> 
      {todoValue.name}
      </label>
    </div>
  )
}
