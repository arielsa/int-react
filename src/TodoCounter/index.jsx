import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css'


function TodoCounter(){
    const {completedTodos, totalTodos} = React.useContext(TodoContext)
    return(
        <h2 className="TodoCounter">has completado {completedTodos} de {totalTodos} tareas</h2>
    );

}

export {TodoCounter};