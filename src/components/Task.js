import {FaTimes} from 'react-icons/fa';

const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : '' }`} onDoubleClick={() => onToggle(task.id)} style={{borderLeft:task.reminder && '5px solid green'}}>
            <h3>{task.text} </h3>
            <FaTimes className="task__Icon" style={{color:'red',cursor:'pointer',border:task.reminder ? '2px solid green' : '2px solid #000'}} onClick={() => onDelete(task.id)}/>            
            <p>{task.day}</p>
        </div>
    )
}

export default Task
