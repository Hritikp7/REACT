import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
import Themebtn from './components/Themebtn'

function App() {
  const [todos,setTodos] = useState([])
  const [themeMode, setThemeMode] = useState("light");
  
  const lightTheme = ()=>{
    setThemeMode("light")
  }
  const darkTheme = ()=>{
    setThemeMode("dark")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  const addTodo = (todo)=>{
    setTodos((prevValue)=>[{id:Date.now(),...todo},...prevValue])
  }
  const updateTodo = (id,todo)=>{
    setTodos((prevValue)=>prevValue.map((prevTodo)=>(
      prevTodo.id===id ? todo : prevTodo
    )))
  }
  const deleteTodo = (id)=>{
    setTodos((prevValue)=>prevValue.filter((prevTodo)=>prevTodo.id !== id))
  }

  const toggleComplete = (id)=>{
    setTodos((prevValue)=>prevValue.map((prevTodo)=>
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{themeMode,darkTheme,lightTheme,todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
    <div className=" dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full h-screen max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 ">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn />
          </div>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />

                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {console.log(todos)}
                        {todos.map((todo)=>(
                
                          <div key={todo.id}
                          className='w-full'>
                              <TodoItem
                              todo={todo} />
                          </div>
                        )
                          
                        )}
                    </div>
                </div>
            </div>

    </TodoProvider>
  )
}

export default App
