import React from "react";
import { useLocalStorage } from './useLocalStorage';


const TodoContext=React.createContext();

function TodoProvider (props){

    const {item:todos,saveItem:saveTodos,loading,error} = useLocalStorage('TODOS_V3',[]);

    const [valorBusqueda, setValorBusqueda] = React.useState('');
    let serchedTodos = [];
    

    if (!valorBusqueda>=1){
        serchedTodos = todos;
    }  else{
        serchedTodos = todos.filter(todo=>{
        const todoText = todo.text.toLowerCase();
        const searchText = valorBusqueda.toLowerCase();
        return todoText.includes(searchText); 
        })
    }

    const completedTodos = todos.filter(todo=>!!todo.completed).length;
    const totalTodos = todos.length;



    const completeTodo= (text)=>{
        const todoIndex = todos.findIndex((todo)=>todo.text===text);
        const newTodos = [...todos];    
        newTodos[todoIndex].completed=true;
        saveTodos(newTodos);
    }
    
    const deleteTodo= (text)=>{
        const todoIndex = todos.findIndex((todo)=>todo.text===text);
        const newTodos = [...todos];    
        newTodos.splice(todoIndex,1);
        saveTodos(newTodos);
    }

    return(
        <TodoContext.Provider value = {{
            loading,
            completedTodos,
            totalTodos,   
            valorBusqueda, 
            setValorBusqueda,
            serchedTodos,
            completeTodo,
            deleteTodo,
            
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext,TodoProvider}


//
//<TodoContext.Consumer></TodoContext.Consumer>