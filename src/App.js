import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState, useEffect} from 'react'

function App() {
  const [tasks, setTasks] = useState([])

const [btnState,setbtnState] = useState(true);

useEffect(() => {
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks();
    setTasks(tasksFromServer);
  }

  getTasks();
  
},[])

// Fetch tasks
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json()

  return data
}

// Fetch task
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await res.json()
  return data
}


// Add task
const addTask = async (task) => {

  const res = await fetch(`http://localhost:5000/tasks`,{
    method:'POST',
    headers:{
      'Content-type':'application/json',
    },
    body:JSON.stringify(task)
  })

  const data = await res.json();

  setTasks([...tasks, data])
}

// Delete Task
const onDelete = async (id) => {
     await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE'
    })
    setTasks(tasks.filter(task => id !== task.id))
}


// Toggle Reminder

const onToggle = async (id) => {

const taskToToggle = await fetchTask(id); 
console.log(taskToToggle)
const updTask = {...taskToToggle, reminder:!taskToToggle.reminder};
console.log(updTask);
const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  method:'PUT',
  headers:{
    'Content-Type':'application/json'
  },
  body: JSON.stringify(updTask)
})
console.log(res);
const data = await res.json()
console.log(data);
setTasks(tasks.map(task => task.id === id ? data : task));
}

// 


    const onAdd = () => {
        setbtnState(!btnState)
    }

  return (
    <div className="container">
      <Header onAdd={onAdd} btnState={btnState}/>
      <AddTask addTask={addTask} btnState={btnState}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle}/> : 'No tasks to display.'}
      
    </div>
  );
}

export default App;
 