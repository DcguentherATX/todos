import React from 'react';
import Todo from './Todo';

const TodoDisplay = ({todos}) => {
    
    return (
        <div>
            {todos.map((todo, i) => <Todo todo={todo} key={i}/>)}
        </div>
    )
}

export default TodoDisplay;