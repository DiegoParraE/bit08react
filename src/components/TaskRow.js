import { useState } from "react";
export const TaskRow = ({task, toggleTask, setStateTask}) => {
  const [isEdit, isEditChange] = useState(false)
  const [inputEdit, inputEditChange] = useState(task.name)
  return (
    <tr>
      <td className="d-flex justify-content-between" >
        { isEdit ? <input value={inputEdit} onChange={(value)=>{
          inputEditChange(value.target.value)

        }}
        onKeyPress={(e)=>{
         
          if(e.charCode === 13){
            
            isEditChange(false)

            setStateTask( (taskElement)=>{
              let last_task = taskElement.map(t => {
               
                if(t.name === task.name){
                  return {...t, name:inputEdit }
                  
                }else{
                  return t
                }
              })
              return last_task
            }
            )
          }
        }
      }
        /> : task.name}
      </td>
      <td>
        <button onClick={()=>{
          isEditChange(true)
        }}>📝</button>
      </td>
      <td>
      <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task)} 
        />
      </td>
    </tr>
  );
};
