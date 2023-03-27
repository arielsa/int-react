import React from "react";
import { TodoContext } from "../TodoContext";
import './todoForm.css'

function TodoForm (){

    const [newTodoValue, setNewTodoValue]= React.useState ('');

    const {addTodo, setOpenModal} = React.useContext(TodoContext);
    
    const onCancel = () => {
        setOpenModal(false);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        addTodo (newTodoValue);
        //console.log(newTodoValue);
        setOpenModal(false);
        setNewTodoValue('');
    };

    const onChange = (event) => {
        setNewTodoValue (event.target.value) ;
        //console.log(event.target.value)
    }

    return (
        <form onSubmit={onSubmit}  >
            <label>...</label>
            <textarea 
                value = {newTodoValue}
                onChange = {onChange}
                placeholder="ingrese tarea" 
            />
            <div>
                <button
                onClick={onCancel} 
                type= 'button'
                >
                    cancelar
                </button>

                <button
                
                type='submit'
                >
                    agregar
                </button>
            </div>
        </form>
    );
}

export {TodoForm};