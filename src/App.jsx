import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', marginLeft:'600px' }}>
      <div style={{ textAlign: 'center', maxWidth: '400px', width: '100%' }}>
        <h1>Todo List</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new todo"
          style={{ padding: '8px', width: '70%', marginBottom: '10px' }}
        />
        <button onClick={addTodo} style={{ padding: '8px', marginLeft: '5px' }}>
          Add
        </button>
        <ul style={{ listStyleType: 'none', padding: 0, marginTop: '20px' }}>
          {todos.map((todo, index) => (
            <li
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textDecoration: todo.completed ? 'line-through' : 'none',
                margin: '10px 0',
              }}
            >
              <span onClick={() => toggleTodo(index)} style={{ cursor: 'pointer' }}>
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(index)}
                style={{ marginLeft: '10px', padding: '4px 8px' }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
