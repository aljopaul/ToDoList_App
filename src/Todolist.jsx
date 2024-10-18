import React, {useState} from 'react'
import Todo from './Todo'
import Ytapp from './Ytapp'

function TodoList({ todos , toggleTodo}) {
  return (
      todos.map(todo => {
        return <Todo key = {todo} todoValue = {todo} toggleTodo = {toggleTodo}/>
}
))}

export default TodoList

