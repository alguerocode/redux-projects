import { useDispatch, useSelector } from "react-redux";
import { actionRemove1 } from './uncompletedRedcuer'
import { actionAdd } from '../completed/completedRedcuer'
let id =0;
const Uncompleted = () => {
  const dispatch = useDispatch()
  
  const tasks = useSelector(state => state.uncompeletedTask)
  function clickHandler(task) {
    dispatch(actionRemove1({
      id: parseInt(task.id)
    }))
    dispatch(actionAdd({
      id:++id,
      title: task.title,
      description: task.description
    }))
  }

  return (
    <div className="uncompeleted-tasks">
      <h2>Uncompleted Tasks</h2>
      {tasks && tasks.map(task => (
        <div key={task.id} className="todo-task">
          <h3 className="title">{task.title}</h3>
          <p className="description">{task.description}</p>
          <button onClick={() => clickHandler(task)} id={task.id}>Compeleted</button>
        </div>
      ))}
    </div>
  );
}

export default Uncompleted;