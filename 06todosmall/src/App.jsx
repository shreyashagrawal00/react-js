import './App.css'
import AppName from './components/AppName'
import AppTodo from './components/AppTodo'
import TodoItems from './components/TodoItems'


function App() {
   const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  return (
    <div className='container'>
     <AppName/>
     <AppTodo/> 
     <TodoItems todoItems={todoItems}></TodoItems>
    </div>
  )
}

export default App
