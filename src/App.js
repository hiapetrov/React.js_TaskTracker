import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import Footer from './components/Footer'

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)

  const [tasks, setTasks] = useState ([])

  useEffect (() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

  getTasks()
  }, [])

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

  return data
}

// Add Task
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}


// Delete Tasks
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}
//toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id===id?{...task, reminder:!task.reminder} : task))
}

  return ( 
    <div className='container'>
      
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>  
      
      {showAddTask && <AddTask onAdd={addTask} />} 
     
      {
        tasks.length >0?<Tasks tasks={tasks} onDelete=
        {deleteTask} onToggle={toggleReminder}/> : <h3>No Tasks to show</h3> 
      }

     <Footer/>
     
    </div>
  )
}

export default App;
