import { Fragment, useState } from 'react';
import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const defaultTodos=[
  {text:'aprender asp.net', completed: true},
  {text:'aprender phyton', completed: false},
  {text:'aprender django ', completed: false},
]


function App() {
  const [todos, setTodos] = useState(defaultTodos);   

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
    setTodos(newTodos);
  }
  
  const deleteTodo= (text)=>{
    const todoIndex = todos.findIndex((todo)=>todo.text===text);
    const newTodos = [...todos];    
    newTodos.splice(todoIndex,1);
    setTodos(newTodos);
  }
  


  return (

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



  );
}

export default App
