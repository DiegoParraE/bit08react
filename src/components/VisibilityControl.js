export const VisibilityControl = ({isChecked, setShowCompleted, cleanTasks}) => {

    const handleDelete = () => {
        if (window.confirm ('¿Estas Seguro De Eliminar La Tarea?')) {
            cleanTasks()
        }
    }

    return(
        <div>
            <input 
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setShowCompleted(e.target.checked)}
            /> {" "}
            <label>Mostrar Tareas Hechas</label>

            <button onClick={handleDelete}>
                Limpiar
            </button>

        </div>
    )
}