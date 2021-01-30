import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react';
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
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={onToggle}/> : 'No tasks to display.'}
    </div>
  );
}

export default App;
 