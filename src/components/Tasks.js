import Task from './Task';




const Tasks = ({tasks, onDelete, toggleReminder}) => {
    
        
          return(
                <>
                {
                 tasks.length > 0 ?  tasks.map((task, i) => (
                     <Task key={i} task={task} onDelete={onDelete} toggleReminder={toggleReminder}/> 
                    )    
                        
                    ) :  'No tasks to display.'
                }
                </>
          )  
        
    
}

export default Tasks
