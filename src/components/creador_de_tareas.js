import { useState} from "react";

export const TaskCreator = ({createNewTask}) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName)
    setNewTaskName(""); 
  };

  return (
    <form onSubmit={handleSubmit} className='my-2 row'>
      <div className="col-9" >
        <input
        className="form-control"
        type="text"
        placeholder="Ingrese Su Nueva Tarea"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        />
      </div>
      <div className="col-3" >
        <button className="btn btn-primary btn-sm" >Guardar Tarea</button>
      </div>  
    </form>
  );
};
