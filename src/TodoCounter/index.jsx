import React from "react";
import './TodoCounter.css'


function TodoCounter({completedTodos, totalTodos}){
    return(
        <h2 className="TodoCounter">has completado {completedTodos} de {totalTodos} tareas</h2>
    );

}

export {TodoCounter};