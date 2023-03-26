import React from "react";
import './TodoSearch.css'

function TodoSearch({valorBusqueda, setValorBusqueda}){

    
    
    const onSearchValue = (event)=>{
        console.log(event.target.value);
        setValorBusqueda(event.target.value);
    }

    return ( 
        
        <React.Fragment>
            <input 
            className="TodoSearch" 
            placeholder="aprender javascript" 
            value = {valorBusqueda}
            onChange= {onSearchValue}
            />           
            <p>{valorBusqueda}</p>
        </React.Fragment>
        )
    

};

export {TodoSearch}; 