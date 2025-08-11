import data from "./db/tasks.json";
import { Task } from "./components/Task/task";

import './style.scss'

function App() {
  const { tasks } = data;
  return (
    <>
    <div className="taskwrapper">
            {tasks.map((task) => {
        return <Task key={task.id}  data={task}/>
      })}
    </div>
    </>
  );
}

export default App;