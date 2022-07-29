import React from 'react';
import propTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem.js';

function TodoList(props) {
    return (
        <div>
            {
                props.todos.map(todo => {
                    return <TodoItem todo={todo} key={todo.id} onChange={props.onToggle} />
                })
            }
        </div>
    )
}

TodoList.propTypes = {
    todos: propTypes.arrayOf(propTypes.object).isRequired,
    onToggle: propTypes.func.isRequired,
}

export default TodoList;