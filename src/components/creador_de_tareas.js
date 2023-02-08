import { useState} from "react";

export const TaskCreator = ({createNewTask}) => {
  const [newTaskName, setNewTaskName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createNewTask(newTaskName)
    setNewTaskName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Su Nueva Tarea"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button>Guardar Tarea</button>
    </form>
  );
};
