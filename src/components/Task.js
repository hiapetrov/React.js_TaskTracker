import { FaTimes } from 'react-icons/fa' 
import { FaClock } from 'react-icons/fa' 

const Task = ( { task, onDelete, onToggle }) => {

return (
  <div className={`task ${ task.reminder? 'reminder' : 'task'}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>{task.text} 
      < FaTimes style={{mouse:'pointer'} } 
                        onClick={() => 
                        onDelete(task.id)}
    />
    </h3>
      <p>{task.day} 
        <FaClock color={task.reminder && 'green'} onClick={() => onToggle(task.id)} />
      </p>
  </div>
)
};

export default Task;
