import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(){
    const Click=(msg)=>{console.log(msg);}
    return(
        <button 
        className="CreateTodoButton"
        onClick={()=>{Click('modal abierto')}}
        >+</button> 
    )
};

export{CreateTodoButton};