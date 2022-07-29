import React, { useEffect, useState } from 'react';
import Heading from './components/Heading/Heading.js';
import InputAdd from './components/InputAdd/InputAdd.js';
import TodoList from './components/TodoList/TodoList.js';
import Congrat from './components/Congrat/Congrat.js';
import Context from './context.js';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = JSON.parse(localStorage.getItem('todos'))

    if (getTodos) {
      setTodos(getTodos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.done = !todo.done
        }
        return todo
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(text,) {
    setTodos(
      todos.concat([
        {
          id: Date.now(),
          text,
          done: false
        }
      ])
    )
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="App">
        <Heading />
        <InputAdd onCreate={addTodo} />

        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <Congrat />}

      </div>
    </Context.Provider>
  );
}

export default App;
