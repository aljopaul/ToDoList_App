import React, {useState, useRef, useEffect} from 'react'
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid'
import TodoList from './Todolist'


const LOCALSTORAGEKEY = 'toDoApp.todos'

function Ytapp() {
  const [todos, setTodos] = useState([])
  const toDoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY))
    if (storedTodos) setTodos (storedTodos)
  }, [])

  useEffect(() => {
    if (todos.length > 0){
      localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(todos))  
  }
},[todos] )

  function toggleTodo(id) {
      const newTodos = [...todos]
      const todo = newTodos.find (todo => todo.id === id)
      todo.complete = !todo.complete
      setTodos(newTodos) 
  }


  function handleAddTodo (e){
    const name = toDoNameRef.current.value
    if (name === '') return
    setTodos (prevTodos =>{
      return ([...prevTodos, {id:uuidv4(),name:name, complete:false}])
    })
    
    toDoNameRef.current.value=null
  }

  function handleClearTodo (){
    const doneList = todos.filter(todo => !todo.complete)
    setTodos(doneList)
  }
  
  return (
    <>
      <div>1 Day or Day 1?</div>
      <br />
      <TodoList todos = {todos} toggleTodo = {toggleTodo}/>
      <input ref={toDoNameRef} type="text" placeholder="Enter a task"/>
      <button onClick={handleAddTodo}>Add</button>
      <button onClick={handleClearTodo}>Delete Selected</button>
      <br /><br />
      <div>{todos.filter(todo => !todo.complete).length}  Left to do</div>
    </>
  )
}

export default Ytapp

