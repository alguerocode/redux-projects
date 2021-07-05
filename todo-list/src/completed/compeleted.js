import { useDispatch, useSelector } from "react-redux";
import { actionRemove, completedRemoveTask } from './completedRedcuer';
import { actionAdd, uncompletedAddTask } from '../uncompeleted/uncompletedRedcuer';


const Completed = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.compeleted)


  function clickHandler(task) {
    dispatch(actionRemove(task.id, completedRemoveTask))
    dispatch(actionAdd(task.title, task.description, uncompletedAddTask))
  }

  return (
    <div className="compeleted">
      <h2>Compeleted Tasks</h2>
      <div className="tasks">
        {tasks && tasks.map(task => (
          <div key={task.id} className="todo-task">
            <h3 className="title">{task.title}</h3>
            <p className="description">{task.description}</p>
            <button
              onClick={() => clickHandler(task)}
              id={task.id}>
              uncompeleted
              </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Completed;