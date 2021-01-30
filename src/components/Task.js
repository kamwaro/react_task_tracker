import {FaTimes} from 'react-icons/fa';

const Task = ({task, onDelete, toggleReminder}) => {
    return (
        <div className="task" onDoubleClick={() => toggleReminder(task.id)} style={{borderLeft:task.reminder && '5px solid green'}}>
            <h3>{task.text} <FaTimes style={{color:'red'}} onClick={() => onDelete(task.id)}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
