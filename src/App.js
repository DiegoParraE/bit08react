import { useState, useEffect } from "react";
import "./App.css";
import { TaskCreator } from "./components/creador_de_tareas";
import { TaskTable} from './components/TaskTable'
import { VisibilityControl } from "./components/VisibilityControl";
function App() { 
  const [tasksItems, settaskItems] = useState([]);
  const [showCompleted, setShowCompleted] = useState(false);
  

function createNewTask(taskName) {
  if (!tasksItems.find(task => task.name === taskName)){
    settaskItems([...tasksItems, {name: taskName, done: false}])
  }
}

  const toggleTask = task => {
    settaskItems(
    tasksItems.map(t => (t.name === task.name) ? {...t, done: !t.done}: t)
    );
  };

  useEffect(()=>{
    let data = localStorage.getItem('tasks')
    if (data) {
      settaskItems(JSON.parse(data))
    }
  }, [  ])

  const cleanTasks = () => {
   settaskItems(tasksItems.filter(task => !task.done))
   setShowCompleted(false)
  }

  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasksItems))
  }, [ tasksItems ])

  return (
    <main className="bg-dark vh-100 text-white" >
      
      <div className="container p-4 col-md-4 offset-md-4">
        <TaskCreator createNewTask = {createNewTask}/>
        <TaskTable tasks={tasksItems} toggleTask={toggleTask} />
        <VisibilityControl
          isChecked={showCompleted}
          setShowCompleted={(checked) =>setShowCompleted (checked)}
          cleanTasks={cleanTasks}
        />


        {
          showCompleted === true && (
            <TaskTable tasks={tasksItems} toggleTask={toggleTask} showCompleted={showCompleted} />
          )
        }
      </div>

    </main>
  );
}

export default App;
