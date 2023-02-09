import React from 'react'

export default function Editor({name}) {
    const editTask = () => {
        
    }
    
  return (
    <form onSubmit={editTask} >
        <input type="text" placeholder={name} value={name} />
        <button type="submit" >Editar</button>     
    </form>
  )
}
