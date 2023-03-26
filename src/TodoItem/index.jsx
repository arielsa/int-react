import React from "react";
import "./TodoItem.css"

function TodoItem(props){

    //const onCompleted=()=>{alert(`tarea: ${props.text}. COMPLETADA`);}
    //const onDeleted=()=>{alert(`tarea: ${props.text}. BORRADA`);}

    return(
    <li className="TodoItem" >
        <span 
            className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}    
            onClick={props.onComplete}
        >
            <span className="material-symbols-outlined">done</span>
        </span>

        <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}> {props.text}</p>

        <span 
            className="Icon Icon-delete"
            onClick={props.deleteTodos}
        >
            X
        </span>
    </li>
    )

};
export {TodoItem};