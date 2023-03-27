import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props){

    const Click=()=>{
        props.setOpenModal(prevState=>!prevState);
    }

    return(
        <button 
        className="CreateTodoButton"
        onClick={Click}
        >+</button> 
    )
};

export{CreateTodoButton};