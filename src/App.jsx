import { Fragment, useState } from 'react';
import React from 'react'
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


const todos=[
  {text:'aprender asp.net', completed: true},
  {text:'aprender phyton', completed: false},
  {text:'aprender django ', completed: false},
]

function App() {
  const [count, setCount] = useState(0)

  return (

    <React.Fragment>

      <TodoCounter/>
      
      <TodoSearch/>
      
      
      <TodoList>

        {todos.map(item => (
          <TodoItem key={item.text} text={item.text}  completed={item.completed} />
        ))  }

      </TodoList>


      <CreateTodoButton/>
      

    </React.Fragment>



  );
}

export default App
