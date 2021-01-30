import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {v4 as uuidv4} from 'uuid'
import { useState } from 'react'
function App() {
  const [tasks, setTasks] = useState([{
    id:1,
    text:'Doctors Appointment',
    day:'Feb 5th at 2:30pm',
    reminder:true
},
{
    id:2,
    text:'Meeting at School',
    day:'Feb 6th at 2:30pm',
    reminder:true
},
{
    id:3,
    text:'Food Shopping',
    day:'Feb 7th at 2:30pm',
    reminder:true
}])

// Add task
const addTask = (task) => {
  const id = uuidv4();
  const newTask = {id,...task};
  setTasks([...tasks,newTask]);
}

// Delete Task
const onDelete = (id) => {
    setTasks(tasks.filter(task => id !== task.id))
}

// Toggle Reminder

const onToggle = (id) => {
setTasks(tasks.map(task => task.id === id ? {...task,reminder:!task.reminder} : task));
}

  return (
    <div className="container">
      <Header />
      <AddTask addTask={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle}/> : 'No tasks to display.'}
    </div>
  );
}

export default App;
 