import { useDispatch, useSelector } from "react-redux";
import {actionRemove, uncompletedRemoveTask} from './uncompletedRedcuer'
import {actionAdd, completedAddTask} from '../completed/completedRedcuer'
const Uncompleted = () => {
  const dispatch =useDispatch()

  const tasks =useSelector(state => state.uncompeleted)
  function clickHandler(task){
    dispatch(actionRemove(uncompletedRemoveTask,task.id))
    dispatch(actionAdd(task.title, task.description,completedAddTask))
  }
  
  return ( 
    <div className="uncompeleted-tasks">
      <h2>Uncompleted Tasks</h2>
      {tasks && tasks.map(task =>(
        <div key={task.id} className="todo-task">
          <h3 className="title">{task.title}</h3>
          <p className="description">{task.description}</p>
          <button onClick={()=>clickHandler(task)} id={task.id}>Compeleted</button>
        </div>
      ))}
    </div>
   );
}
 
export default Uncompleted;