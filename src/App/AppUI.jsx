import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import {TodoList} from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';

import React from 'react'
import { TodoForm } from '../todoForm';




function AppUI() {

    const {error,loading,serchedTodos,completeTodo,deleteTodo,valorBusqueda,openModal,setOpenModal} = React.useContext(TodoContext);

    return(
        
        <React.Fragment>

            <TodoCounter/>
            
            <TodoSearch/>        
            
            <TodoList>
                {error && <p>hubo un error</p> }
                {loading && <p>cargando..</p> }
                {(!loading && !serchedTodos.length && !valorBusqueda)&& <p>ingresa primer tarea</p> }
                {serchedTodos.map(item => (
                    <TodoItem 
                    key={item.text} 
                    text={item.text}  
                    completed={item.completed} 
                    onComplete = {()=>completeTodo(item.text)}
                    deleteTodos = {()=>deleteTodo(item.text)}
                    />
                ))  }            
            </TodoList>

            {openModal && 
            (
                <Modal>
                    <TodoForm/>
                </Modal>
            )}

            <CreateTodoButton
            setOpenModal = {setOpenModal}
            />

        </React.Fragment>
    )
}

export {AppUI}

