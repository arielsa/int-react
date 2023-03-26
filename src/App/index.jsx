import { Fragment, useState } from 'react';
import React from 'react'
import { AppUI } from './AppUI';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import {TodoList} from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';




//const defaultTodos=[
//  {text:'aprender asp.net', completed: true},
//  {text:'aprender phyton', completed: false},
//  {text:'aprender django ', completed: false},
//  {text:'1aprender asp.net', completed: true},
//  {text:'2aprender phyton', completed: false},
//  {text:'3aprender django ', completed: false},
//]

function useLocalStorage(itemName,initialValue){

  

  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;  

  if (!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem =initialValue;
  } else {
    parsedItem=JSON.parse(localStorageItem);
  }
  
  const [item, setTodos] = useState(parsedItem);  

  const saveItem = (newItem)=>{
    let stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem (itemName,stringifiedItem);
    setTodos(newItem);
  }

  return [
    item,
    saveItem
  ];

}

function App() {



  const [todos,saveTodos] = useLocalStorage('TODOS_V3',[]);

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
  


  return (
    <AppUI

    completedTodos={completedTodos}
    totalTodos={totalTodos}   
    valorBusqueda = {valorBusqueda} 
    setValorBusqueda = {setValorBusqueda}
    serchedTodos = {serchedTodos}
    completeTodo = {completeTodo}
    deleteTodo = {deleteTodo}
    
    />


  );
}

export default App
