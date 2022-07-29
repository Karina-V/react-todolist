import React, { useContext } from 'react';
import propTypes from 'prop-types';
import Context from '../../context.js'

function TodoItem({ todo, onChange }) {
    const { removeTodo } = useContext(Context)
    const clasess = []

    if (todo.done) {
        clasess.push('done')
    }

    return (
        <div className={clasess.join(' ')}>
            <div className="pb-2">
                <div className=" w-9/12 p-3 my-1 border-0 border-l-4 border-b-4 border-orange-500 rounded-lg flex
        justify-between items-center shadow-2xl mx-auto">
                    <label for="checkbox">
                        <input type="checkbox" checked={todo.done} className="accent-orange-500 cursor-pointer" onChange={() => onChange(todo.id)} />
                    </label>
                    <p className="cursor-pointer text-black-400 overflow-hidden w-full h-6 relative pl-2.5 text-left " >
                        {todo.text}
                    </p>
                    <div onClick={() => removeTodo(todo.id)}>
                        <i className="fa-solid fa-trash-can text-red-500 mr-4 cursor-pointer"></i>
                    </div>
                </div>
            </div>
        </div >
    )
}

TodoItem.propTypes = {
    todos: propTypes.arrayOf(propTypes.object).isRequired,
    onChange: propTypes.func.isRequired,
}
export default TodoItem;