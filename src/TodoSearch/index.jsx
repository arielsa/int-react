import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css'

function TodoSearch(){

    const {valorBusqueda, setValorBusqueda} = React.useContext(TodoContext)
    
    const onSearchValue = (event)=>{
       // console.log(event.target.value);
        setValorBusqueda(event.target.value);
    }

    let buscando='';
    if (valorBusqueda.length>0){buscando='buscando:'}
    

    return ( 
        
        <React.Fragment>
            <input 
            className="TodoSearch" 
            placeholder="buscar tarea:" 
            value = {valorBusqueda}
            onChange= {onSearchValue}
            />            
            <div className="p"> {buscando} {valorBusqueda}</div>          
            
        </React.Fragment>
        )
    

};

export {TodoSearch}; 