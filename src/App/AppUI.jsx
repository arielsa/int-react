import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import {TodoList} from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

import { Fragment, useState } from 'react';
import React from 'react'




function AppUI( 
    {
        loading,
        error,
        completedTodos ,
        totalTodos ,
        valorBusqueda ,
        setValorBusqueda ,
        serchedTodos ,
        completeTodo ,
        deleteTodo ,
    }

    
) {
    return(
        
        <React.Fragment>

        <TodoCounter
        completedTodos={completedTodos}
        totalTodos={totalTodos}      
        />
        
        <TodoSearch
        valorBusqueda = {valorBusqueda} 
        setValorBusqueda = {setValorBusqueda}
        />
        
        
        <TodoList>
            {error && <p>hubo un error</p> }
            {loading && <p>cargando..</p> }
            {(!loading && !serchedTodos.length)&& <p>ingresa primer tarea</p> }

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


        <CreateTodoButton/>
        

    </React.Fragment>


    )
}
  
export {AppUI}

