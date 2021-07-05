import React from 'react';
import Completed from './completed/compeleted';
import CreateTask from './create-task';
import Uncompleted from './uncompeleted/uncompleted';
const App = () => {
  return (
    <div className="app">
      <h1>Todos Redux Project</h1>
      <div className="create">
        <CreateTask />
      </div>
      <div className="uncompleted">
        <div className="tasks">
          <Uncompleted />
        </div>
      </div>  
      <div className="compeleted">
        <Completed />
      </div>
    </div> 
   );
}
 
export default App;