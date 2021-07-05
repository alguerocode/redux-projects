import { useDispatch, useSelector } from "react-redux";
import { actionRemove } from './completedRedcuer';
import { actionAdd1 } from '../uncompeleted/uncompletedRedcuer';

let id =0;
const Completed = () => {
  const dispatch = useDispatch()
  const tasks = useSelector((state) => state.compeletedTask)


  function clickHandler(task) {
    dispatch(actionRemove({
     id:parseInt(task.id)
    }))
    dispatch(actionAdd1({
      id:++id,
      title:task.title,
      description:task.description
    }))
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